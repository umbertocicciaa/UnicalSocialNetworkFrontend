import { Component, OnInit } from "@angular/core";
import { TwitComponent } from "../twit/twit.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { CommonModule } from "@angular/common";
import { PostService, UserService } from "../api/services";
import { firstValueFrom } from "rxjs";
import { PostResponse } from "../api/models";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { ErrorComponent } from "../error/error.component";

@Component({
  selector: "app-explore-twit",
  standalone: true,
  imports: [
    TwitComponent,
    InfiniteScrollModule,
    CommonModule,
    SpinnerLoadComponent,
    ErrorComponent,
  ],
  templateUrl: "./explore-twit.component.html",
  styleUrl: "./explore-twit.component.css",
})
export class ExploreTwitComponent implements OnInit {
  twits: PostResponse[] = [];
  error: boolean = false;
  loading: boolean = false;
  page: number = 0;
  loggedUserId: number = -1;
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
      this.postService.getPostsOfTypeTwits({
        page: this.page,
      })
    )
      .then((posts) => {
        posts.forEach((post) => this.twits.push(post));
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
      this.postService.getPostsOfTypeTwits({
        page: this.page,
      })
    )
      .then((posts) => {
        posts.forEach((post) => this.twits.push(post));
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
    this.twits = this.twits.filter((post) => post.id !== postId);
  }
}
