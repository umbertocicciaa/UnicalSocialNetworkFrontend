import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { TwitComponent } from "../twit/twit.component";
import { PostResponse } from "../api/models";
import { PostService, UserService } from "../api/services";
import { ActivatedRoute } from "@angular/router";
import { firstValueFrom } from "rxjs";

@Component({
  selector: "app-user-twit",
  standalone: true,
  imports: [
    InfiniteScrollModule,
    CommonModule,
    SpinnerLoadComponent,
    TwitComponent,
  ],
  templateUrl: "./user-twit.component.html",
  styleUrl: "./user-twit.component.css",
})
export class UserTwitComponent implements OnInit {
  posts: PostResponse[] = [];
  load: boolean = false;
  userId: number = -1;
  loggedUserId: number = -1;
  private page: number = 0;
  constructor(
    private postService: PostService,
    private userServie: UserService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((params) => {
      this.userId = params["id"];
    });
  }
  async ngOnInit() {
    this.load = true;
    await firstValueFrom(this.userServie.getLoggedUsers()).then(
      (user) => (this.loggedUserId = user.id ?? -1)
    );
    await firstValueFrom(
      this.postService.getPostsOfTypeTwitByUser({
        page: this.page,
        user_id: this.userId,
      })
    )
      .then((post) => (this.posts = post))
      .finally(() => (this.load = false));
  }

  async onScroll() {
    this.page++;
    this.load = true;
    await firstValueFrom(
      this.postService.getPostsOfTypeTwitByUser({
        page: this.page,
        user_id: this.userId,
      })
    )
      .then((posts) => posts.forEach((post) => this.posts.push(post)))
      .finally(() => (this.load = false));
  }
  onPostDeleted(postId: number) {
    this.posts = this.posts.filter((post) => post.id !== postId);
  }
}
