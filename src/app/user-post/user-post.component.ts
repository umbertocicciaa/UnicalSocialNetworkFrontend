import { Component, OnInit } from "@angular/core";
import { PostService, UserService } from "../api/services";
import { CommonModule } from "@angular/common";
import { PostComponent } from "../post/post.component";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { PostResponse } from "../api/models";
import { firstValueFrom } from "rxjs";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-user-post",
  standalone: true,
  imports: [
    CommonModule,
    PostComponent,
    SpinnerLoadComponent,
    InfiniteScrollModule,
  ],
  templateUrl: "./user-post.component.html",
  styleUrl: "./user-post.component.css",
})
export class UserPostComponent implements OnInit {
  userId: number = -1;
  loggedUserId: number = -1;
  page: number = 0;
  posts: PostResponse[] = [];
  load: boolean = false;

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
      this.postService.getPostsOfTypePostByUser({
        page: this.page,
        user_id: this.userId,
      })
    )
      .then((posts) => (this.posts = posts))
      .finally(() => (this.load = false));
  }

  async onScroll() {
    this.page++;
    this.load = true;
    await firstValueFrom(
      this.postService.getPostsOfTypePostByUser({
        page: this.page,
        user_id: this.userId,
      })
    )
      .then((posts) => {
        posts.forEach((post) => this.posts.push(post));
      })
      .finally(() => (this.load = false));
  }
  onPostDeleted(postId: number) {
    this.posts = this.posts.filter((post) => post.id !== postId);
  }
}
