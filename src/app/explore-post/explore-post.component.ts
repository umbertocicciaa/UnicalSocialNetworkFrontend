import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { PostComponent } from "../post/post.component";
import { PostService } from "../api/services";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { TwitComponent } from "../twit/twit.component";
import { firstValueFrom } from "rxjs";
import { PostResponse } from "../api/models";

@Component({
  selector: "app-explore-post",
  standalone: true,
  imports: [CommonModule, PostComponent, TwitComponent, InfiniteScrollModule],
  templateUrl: "./explore-post.component.html",
  styleUrl: "./explore-post.component.css",
})
export class ExplorePostComponent implements OnInit {
  posts: PostResponse[] = [];
  loading: boolean = false;
  error: boolean = false;
  private page: number = 0;
  constructor(private postService: PostService) {}

  async ngOnInit() {
    this.loading = true;
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
}
