import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { CommentService } from "../api/services/comment.service";
import { UserService } from "../api/services/user.service";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.css",
})
export class PostComponent implements OnInit {
  @Input()
  post: any = {};
  constructor(
    private userService: UserService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {}

  likePost(post: any): void {
    if (post.liked) {
      post.likes--;
    } else {
      post.likes++;
    }
    post.liked = !post.liked;
  }

  toggleComments(post: any): void {
    post.showComments = !post.showComments;
  }
}
