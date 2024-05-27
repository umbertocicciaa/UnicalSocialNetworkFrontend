import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { PostService } from "../api/services";
import { firstValueFrom } from "rxjs";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { ErrorComponent } from "../error/error.component";
import { Router } from "@angular/router";
import { TwitCreatedRespose } from "../api/models";
@Component({
  selector: "app-create-twit",
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    SpinnerLoadComponent,
    ErrorComponent,
  ],
  templateUrl: "./create-twit.component.html",
  styleUrl: "./create-twit.component.css",
})
export class CreateTwitComponent {
  tweetText: string = "";
  error: boolean = false;
  loading: boolean = false;
  creato: boolean = false;
  constructor(private postService: PostService, private router: Router) {}

  async onSubmit() {
    if (!this.tweetText) return;
    this.loading = true;
    this.creato = false;
    await firstValueFrom(
      this.postService.createTwit({
        body: {
          caption: this.tweetText.trim(),
        },
      })
    )
      .then(() => {
        this.loading = false;
        this.creato = true;
        this.tweetText = "";
      })
      .catch(() => {
        this.error = true;
        this.loading = false;
      });
  }
}
