import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute } from "@angular/router";
import { CommentService } from "../api/services";
import { firstValueFrom } from "rxjs";
import { CommentCreatedResponse, CommentResponse } from "../api/models";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { CommentComponent } from "../comment/comment.component";

@Component({
  selector: "app-explore-comment",
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    SpinnerLoadComponent,
    CommentComponent,
  ],
  templateUrl: "./explore-comment.component.html",
  styleUrl: "./explore-comment.component.css",
})
export class ExploreCommentComponent implements OnInit {
  private postId: number = -1;
  private page: number = 0;
  loading: boolean = false;
  completato: boolean = false;
  comments: CommentResponse[] = [];
  newComment: string = "";

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {
    route.params.subscribe((params) => {
      this.postId = params["postId"];
    });
  }

  async ngOnInit() {
    this.loading = true;
    await firstValueFrom(
      this.commentService.getComment({
        post_id: this.postId,
        page: this.page,
      })
    )
      .then((comments) => {
        comments.forEach((comment) => this.comments.push(comment));
      })
      .catch(() => {})
      .finally(() => {
        this.loading = false;
      });
  }

  async onSubmit() {
    if (!this.newComment) return;
    this.loading = true;
    await firstValueFrom(
      this.commentService.createComment({
        body: {
          comment: this.newComment.trim(),
          postId: this.postId,
        },
      })
    )
      .then((comment: CommentCreatedResponse) => {
        this.comments.unshift(comment);
        this.completato = true;
      })
      .finally(() => (this.loading = false));
  }
}
export { CommentComponent };
