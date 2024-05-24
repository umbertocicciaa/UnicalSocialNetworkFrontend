import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { PostResponse } from "../api/models";
import { PostService } from "../api/services";
import { firstValueFrom } from "rxjs";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Route, Router } from "@angular/router";

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

@Component({
  selector: "app-twit",
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: "./twit.component.html",
  styleUrl: "./twit.component.css",
})
export class TwitComponent implements OnInit {
  @Input()
  tweet!: PostResponse;

  constructor(
    private postService: PostService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private router: Router
  ) {
    iconRegistry.addSvgIconLiteral(
      "thumbs-up",
      sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON)
    );
  }

  ngOnInit() {}

  async likeTweet(tweet: PostResponse) {
    await firstValueFrom(
      this.postService.addLike({ body: { postId: tweet.id ?? -1 } })
    ).then((postRes) => {
      tweet.like = postRes.like;
    });
  }

  toggleComments(tweet: any): void {
    tweet.showComments = !tweet.showComments;
  }

  goToProfile(username: string | undefined) {
    if (username) this.router.navigate(["/home/profile/" + username]);
  }
}
