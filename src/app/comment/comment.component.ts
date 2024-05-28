import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CommentResponse } from "../api/models";

@Component({
  selector: "app-comment",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./comment.component.html",
  styleUrl: "./comment.component.css",
})
export class CommentComponent {
  @Input()
  comment!: CommentResponse;
  constructor() {}
}
