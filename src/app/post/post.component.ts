import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.css",
})
export class PostComponent {
  @Input()
  post: any = {};
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
