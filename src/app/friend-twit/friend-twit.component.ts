import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ErrorComponent } from "../error/error.component";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { TwitComponent } from "../twit/twit.component";
import { PostResponse } from "../api/models";
import { PostService } from "../api/services";
import { firstValueFrom } from "rxjs";

@Component({
  selector: "app-friend-twit",
  standalone: true,
  imports: [
    CommonModule,
    ErrorComponent,
    SpinnerLoadComponent,
    InfiniteScrollModule,
    TwitComponent,
  ],
  templateUrl: "./friend-twit.component.html",
  styleUrl: "./friend-twit.component.css",
})
export class FriendTwitComponent implements OnInit {
  twits: PostResponse[] = [];
  error: boolean = false;
  loading: boolean = false;
  page: number = 0;

  constructor(private postService: PostService) {}

  async ngOnInit() {
    this.loading = true;
    await firstValueFrom(
      this.postService.getPostsOfTypeTwitFollowings({ page: this.page })
    )
      .then((posts) => {
        posts.forEach((post) => this.twits.push(post));
      })
      .catch(() => {
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
      this.postService.getPostsOfTypeTwitFollowings({ page: this.page })
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
}
