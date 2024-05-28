import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { PostComponent } from "../post/post.component";
import { PostService } from "../api/services";
import { PostResponse, UserResponse } from "../api/models";
import { firstValueFrom } from "rxjs";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ErrorComponent } from "../error/error.component";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";

@Component({
  selector: "app-friend-post",
  standalone: true,
  imports: [
    CommonModule,
    PostComponent,
    InfiniteScrollModule,
    ErrorComponent,
    SpinnerLoadComponent,
  ],
  templateUrl: "./friend-post.component.html",
  styleUrl: "./friend-post.component.css",
})
export class FriendPostComponent implements OnInit {
  posts: PostResponse[] = [];
  loading: boolean = false;
  error: boolean = false;
  private currentUser: UserResponse = {};
  private page: number = 0;

  constructor(private postService: PostService) {}

  async ngOnInit() {
    this.loading = true;
    await firstValueFrom(
      this.postService.getPostsOfTypePostFollowings({ page: this.page })
    )
      .then((posts) => {
        posts.forEach((post) => this.posts.push(post));
      })
      .catch(() => {
        this.loading = false;
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }
  async onScroll() {
    this.loading = true;
    this.page++;
    await firstValueFrom(
      this.postService.getPostsOfTypePostFollowings({ page: this.page })
    )
      .then((posts) => {
        posts.forEach((post) => this.posts.push(post));
      })
      .catch(() => {
        this.error = true;
        this.loading = false;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
