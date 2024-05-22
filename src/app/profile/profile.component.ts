import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FollowerService, PostService, UserService } from "../api/services";
import { firstValueFrom } from "rxjs";
import { ErrorComponent } from "../error/error.component";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [CommonModule, ErrorComponent],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.css",
})
export class ProfileComponent implements OnInit {
  private user: string = "";
  username: string = "";
  fullName: string = "";
  bio: string = "";
  postsCount: number = 0;
  followersCount: number = 0;
  followingCount: number = 0;
  error: boolean = false;
  posts: Array<{ image: string }> = [
    { image: "https://via.placeholder.com/300" },
    { image: "https://via.placeholder.com/300" },
    { image: "https://via.placeholder.com/300" },
  ];

  constructor(
    private route: ActivatedRoute,
    private followerService: FollowerService,
    private userService: UserService,
    private postService: PostService
  ) {
    route.params.subscribe((params) => {
      this.user = params["username"];
    });
  }

  async ngOnInit() {
    try {
      let currentUser = await firstValueFrom(
        this.userService.getUserByUsername({
          username: this.user,
        })
      );
      this.username = currentUser.profileName ?? "";
      this.fullName = currentUser.firstName ?? "" + currentUser.lastName ?? "";
      this.bio = currentUser.bio ?? "";
      let follower = await firstValueFrom(
        this.followerService.countFollowers({
          user_id: currentUser.id ?? -1,
        })
      );
      let following = await firstValueFrom(
        this.followerService.countFollowing({ user_id: currentUser.id ?? -1 })
      );
      this.followersCount = follower.followerNumber ?? 0;
      this.followingCount = following.followingNumber ?? 0;
      let postCount = await firstValueFrom(
        this.postService.countPostsByUserId({ user_id: currentUser.id ?? -1 })
      );
      this.postsCount = postCount.post ?? 0;
    } catch (err) {
      this.error = true;
    }
  }
}
