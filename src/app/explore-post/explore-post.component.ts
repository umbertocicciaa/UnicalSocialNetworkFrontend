import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { PostComponent } from "../post/post.component";
import { PostService, UserService } from "../api/services";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { TwitComponent } from "../twit/twit.component";
import { firstValueFrom } from "rxjs";
import { PostResponse } from "../api/models";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { ErrorComponent } from "../error/error.component";

@Component({
  selector: "app-explore-post",
  standalone: true,
  imports: [
    CommonModule,
    PostComponent,
    TwitComponent,
    InfiniteScrollModule,
    SpinnerLoadComponent,
    ErrorComponent,
  ],
  templateUrl: "./explore-post.component.html",
  styleUrl: "./explore-post.component.css",
})
export class ExplorePostComponent implements OnInit {
  posts: PostResponse[] = [];
  loading: boolean = false;
  error: boolean = false;
  loggedUserId: number = -1;
  private page: number = 0;
  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.loading = true;
    await firstValueFrom(this.userService.getLoggedUsers()).then(
      (user) => (this.loggedUserId = user.id ?? -1)
    );
    await firstValueFrom(
      this.postService.getPostsOfTypePost({ page: this.page })
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

  async onScroll() {
    this.loading = true;
    this.page++;
    await firstValueFrom(
      this.postService.getPostsOfTypePost({ page: this.page })
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

  onPostDeleted(postId: number) {
    this.posts = this.posts.filter((post) => post.id !== postId);
  }
}
