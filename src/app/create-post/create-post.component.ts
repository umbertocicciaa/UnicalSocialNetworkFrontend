import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
@Component({
  selector: "app-create-post",
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, CommonModule, MatInputModule],
  templateUrl: "./create-post.component.html",
  styleUrl: "./create-post.component.css",
})
export class CreatePostComponent {
  imagePreview: string | ArrayBuffer | null = null;
  caption: string = "";

  constructor() {}

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    // Logic to handle the post creation
    console.log("Post submitted");
    console.log("Caption:", this.caption);
    console.log("Image:", this.imagePreview);
  }
}
