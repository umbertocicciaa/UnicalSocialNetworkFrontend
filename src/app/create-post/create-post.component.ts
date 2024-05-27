import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { PostService } from "../api/services";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { firstValueFrom } from "rxjs";
import { ErrorComponent } from "../error/error.component";
@Component({
  selector: "app-create-post",
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    SpinnerLoadComponent,
    ErrorComponent,
  ],
  templateUrl: "./create-post.component.html",
  styleUrl: "./create-post.component.css",
})
export class CreatePostComponent {
  imagePreview: string | ArrayBuffer | null = null;
  caption: string = "";
  selectedFile!: File;
  loading: boolean = false;
  error: boolean = false;
  completato: boolean = false;
  constructor(private postService: PostService) {}

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    this.selectedFile = file;
    reader.readAsDataURL(file);
  }

  async onSubmit() {
    if (!this.selectedFile) return;
    this.loading = true;
    const base64String = await this.convertFileToBase64(this.selectedFile);
    await firstValueFrom(
      this.postService.createPost({
        body: {
          caption: this.caption,
          mediaFile: base64String,
        },
      })
    )
      .then(() => (this.error = false))
      .catch((err) => {
        this.error = true;
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
