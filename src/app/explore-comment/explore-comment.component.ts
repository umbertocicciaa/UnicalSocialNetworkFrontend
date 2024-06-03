import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute } from "@angular/router";
import { CommentService, UserService } from "../api/services";
import { firstValueFrom } from "rxjs";
import { CommentCreatedResponse, CommentResponse } from "../api/models";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { CommentComponent } from "../comment/comment.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@Component({
  selector: "app-explore-comment",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SpinnerLoadComponent,
    CommentComponent,
    InfiniteScrollModule,
  ],
  templateUrl: "./explore-comment.component.html",
  styleUrls: ["./explore-comment.component.css"],
})
export class ExploreCommentComponent implements OnInit {
  private postId: number = -1;
  private page: number = 0;
  loggedUserId: number = -1;
  loading: boolean = false;
  completato: boolean = false;
  comments: CommentResponse[] = [];
  commentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private commentService: CommentService
  ) {
    this.commentForm = this.fb.group({
      newComment: ["", Validators.required],
    });

    route.params.subscribe((params) => {
      this.postId = params["postId"];
    });
  }

  async ngOnInit() {
    this.loading = true;
    await firstValueFrom(this.userService.getLoggedUsers()).then(
      (user) => (this.loggedUserId = user.id ?? -1)
    );
    await this.loadComments();
  }

  async onSubmit() {
    if (this.commentForm.invalid) return;
    this.loading = true;
    const newComment = this.commentForm.get("newComment")?.value.trim();
    await firstValueFrom(
      this.commentService.createComment({
        body: {
          comment: newComment,
          postId: this.postId,
        },
      })
    )
      .then((comment: CommentCreatedResponse) => {
        this.comments.unshift(comment);
        this.completato = true;
        this.commentForm.reset();
      })
      .finally(() => (this.loading = false));
  }

  async onScroll() {
    this.page++;
    this.loading = true;
    await this.loadComments();
  }

  private async loadComments() {
    await firstValueFrom(
      this.commentService.getComment({
        post_id: this.postId,
        page: this.page,
      })
    )
      .then((comments) => {
        this.comments.push(...comments);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  onCommentDeleted(commentId: number) {
    this.comments = this.comments.filter((comment) => comment.id !== commentId);
  }

  loadingDelete(loading: boolean) {
    this.loading = loading;
  }
}
