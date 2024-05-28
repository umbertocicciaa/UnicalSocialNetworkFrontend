import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { ErrorComponent } from "../error/error.component";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { UserService } from "../api/services";

@Component({
  selector: "app-edit-profile",
  standalone: true,
  imports: [
    CommonModule,
    SpinnerLoadComponent,
    ErrorComponent,
    MatFormField,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: "./edit-profile.component.html",
  styleUrl: "./edit-profile.component.css",
})
export class EditProfileComponent {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  bio: string = "";
  imagePreview: string | ArrayBuffer | null = null;
  selectedFile!: File;

  constructor(private userService: UserService) {}

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
    const base64String = await this.convertFileToBase64(this.selectedFile);
    console.log("Profile updated");
    console.log("First Name:", this.firstName);
    console.log("Last Name:", this.lastName);
    console.log("Email:", this.email);
    console.log("Bio:", this.bio);
    console.log("Profile Image:", base64String);
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
