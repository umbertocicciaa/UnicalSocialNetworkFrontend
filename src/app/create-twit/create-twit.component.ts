import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { PostService } from "../api/services";
import { firstValueFrom } from "rxjs";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { ErrorComponent } from "../error/error.component";
import { Router } from "@angular/router";
@Component({
  selector: "app-create-twit",
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    SpinnerLoadComponent,
    ErrorComponent,
  ],
  templateUrl: "./create-twit.component.html",
  styleUrl: "./create-twit.component.css",
})
export class CreateTwitComponent {
  tweetForm: FormGroup;
  loading: boolean = false;
  creato: boolean = false;
  erroreTwit: any = false;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {
    this.tweetForm = this.fb.group({
      tweetText: ["", [Validators.required, Validators.maxLength(280)]],
    });
  }

  async onSubmit() {
    if (this.tweetForm.invalid) {
      return;
    }
    this.loading = true;
    this.creato = false;
    await firstValueFrom(
      this.postService.createTwit({
        body: {
          caption: this.tweetForm.get("tweetText")?.value.trim(),
        },
      })
    )
      .then(() => {
        this.loading = false;
        this.creato = true;
        this.erroreTwit = false;
        this.tweetForm.reset();
      })
      .catch(() => {
        this.creato = false;
        this.erroreTwit = true;
        this.loading = false;
      });
  }
}
