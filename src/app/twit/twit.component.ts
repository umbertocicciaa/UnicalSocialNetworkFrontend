import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-twit",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./twit.component.html",
  styleUrl: "./twit.component.css",
})
export class TwitComponent implements OnInit {
  @Input()
  tweet: any;

  constructor() {}

  ngOnInit(): void {}

  likeTweet(tweet: any): void {
    if (tweet.liked) {
      tweet.likes--;
    } else {
      tweet.likes++;
    }
    tweet.liked = !tweet.liked;
  }

  toggleComments(tweet: any): void {
    tweet.showComments = !tweet.showComments;
  }
}
