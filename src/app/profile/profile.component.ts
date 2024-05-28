import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouteReuseStrategy } from "@angular/router";
import { FollowerService, PostService, UserService } from "../api/services";
import { firstValueFrom } from "rxjs";
import { ErrorComponent } from "../error/error.component";
import { UserResponse } from "../api/models";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [CommonModule, ErrorComponent, SpinnerLoadComponent],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.css",
})
export class ProfileComponent implements OnInit {
  private user: string = "";
  private loggedUser: UserResponse = {};

  username: string = "";
  fullName: string = "";
  bio: string = "";
  postsCount: number = 0;
  followersCount: number = 0;
  followingCount: number = 0;
  userId: number = -1;
  error: boolean = false;
  loadingPage: boolean = false;
  loadingOperation: boolean = false;
  sameUser: boolean = false;
  seguiUtente: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private followerService: FollowerService,
    private userService: UserService,
    private postService: PostService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    route.params.subscribe((params) => {
      this.user = params["username"];
    });
  }

  async ngOnInit() {
    this.loadingPage = true;
    try {
      this.loggedUser = await firstValueFrom(this.userService.getLoggedUsers());
      const currentUser = await firstValueFrom(
        this.userService.getUserByUsername({ username: this.user })
      );
      if (currentUser) {
        this.userId = currentUser.id ?? -1;
        this.username = currentUser.profileName ?? "";
        this.fullName =
          (currentUser.firstName ?? "") + " " + (currentUser.lastName ?? "");
        this.bio = currentUser.bio ?? "";
        const follower = await firstValueFrom(
          this.followerService.countFollowers({ user_id: this.userId })
        );
        this.followersCount = follower?.followerNumber ?? 0;
        const following = await firstValueFrom(
          this.followerService.countFollowing({ user_id: this.userId })
        );
        this.followingCount = following?.followingNumber ?? 0;
        const postCount = await firstValueFrom(
          this.postService.countPostsByUserId({ user_id: this.userId })
        );
        this.postsCount = postCount?.post ?? 0;
        if (this.loggedUser.id !== currentUser.id) {
          await firstValueFrom(
            this.followerService.isFollowing({
              user: this.loggedUser.id ?? -1,
              userToFollow: currentUser.id ?? -1,
            })
          ).then((res) => (this.seguiUtente = res?.following ?? false));
        }
        this.sameUser =
          currentUser?.profileName === this.loggedUser?.profileName;
      } else {
        this.error = true;
      }
    } catch (err) {
      this.error = true;
    } finally {
      this.loadingPage = false;
    }
  }

  async followUser() {
    this.loadingOperation = true;
    await firstValueFrom(
      this.followerService.follow({ body: { userId: this.userId } })
    )
      .then(async () => {
        let follower = await firstValueFrom(
          this.followerService.countFollowers({
            user_id: this.userId ?? -1,
          })
        ).catch(() => {
          this.error = true;
          return;
        });
        let following = await firstValueFrom(
          this.followerService.countFollowing({ user_id: this.userId ?? -1 })
        ).catch(() => {
          this.error = true;
          return;
        });
        if (follower && following) {
          this.followersCount = follower.followerNumber ?? 0;
          this.followingCount = following.followingNumber ?? 0;
          this.seguiUtente = true;
        }
      })
      .catch(() => (this.error = true))
      .finally(() => (this.loadingOperation = false));
  }

  editProfile() {
    this.router.navigate(["/home/edit-profile"]);
  }
}
