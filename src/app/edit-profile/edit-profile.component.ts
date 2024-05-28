import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { ErrorComponent } from "../error/error.component";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { UserService } from "../api/services";
import { firstValueFrom } from "rxjs";

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
  loading: boolean = false;
  completato: boolean = false;
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
    this.loading = true;
    let base64String;
    if (this.selectedFile)
      base64String = await this.convertFileToBase64(this.selectedFile);
    await firstValueFrom(
      this.userService.updateProfileUser({
        body: {
          bio: this.bio ?? "",
          email: this.email ?? "",
          firstName: this.firstName ?? "",
          lastName: this.lastName ?? "",
          photo: base64String ?? "",
        },
      })
    )
      .then(() => (this.completato = true))
      .catch(() => (this.completato = false))
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
