import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { PostService } from "../api/services";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { ErrorComponent } from "../error/error.component";
import { firstValueFrom } from "rxjs";

@Component({
  selector: "app-create-post",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    SpinnerLoadComponent,
    ErrorComponent,
  ],
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"],
})
export class CreatePostComponent {
  postForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  loading: boolean = false;
  completato: boolean = false;
  errorePost: any;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postForm = this.fb.group({
      caption: ["", Validators.required],
      mediaFile: [null, Validators.required],
    });
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
      this.postForm.patchValue({ mediaFile: file });
    };
    reader.readAsDataURL(file);
  }

  async onSubmit() {
    if (this.postForm.invalid) {
      return;
    }
    this.loading = true;
    const base64String = await this.convertFileToBase64(
      this.postForm.get("mediaFile")?.value
    );
    await firstValueFrom(
      this.postService.createPost({
        body: {
          caption: this.postForm.get("caption")?.value,
          mediaFile: base64String,
        },
      })
    )
      .then(() => {
        this.completato = true;
        this.errorePost = false;
        this.postForm.reset();
        this.imagePreview = null;
      })
      .catch(() => {
        this.completato = false;
        this.errorePost = true;
      })
      .finally(() => (this.loading = false));
  }

  private convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  }
}
