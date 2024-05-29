import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommentResponse } from "../api/models";
import { CommentService } from "../api/services";
import { firstValueFrom } from "rxjs";

@Component({
  selector: "app-comment",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./comment.component.html",
  styleUrl: "./comment.component.css",
})
export class CommentComponent {
  @Input()
  comment: CommentResponse = {};
  @Input()
  loggedUserId: number = -1;
  @Output() commentDeleted = new EventEmitter<number>();
  @Output() loadingDelete = new EventEmitter<boolean>();

  constructor(private commentService: CommentService) {}

  async deleteComment() {
    this.loadingDelete.emit(true);
    await firstValueFrom(
      this.commentService.deleteComment({
        comment_id: this.comment.id ?? -1,
      })
    )
      .then((deleted) => {
        if (deleted?.deleted === true) {
          this.commentDeleted.emit(this.comment.id);
        }
      })
      .finally(() => this.loadingDelete.emit(false));
  }

  ownerIsLoggedUser(): boolean {
    return this.comment.createdByUserid?.userId === this.loggedUserId;
  }
}
