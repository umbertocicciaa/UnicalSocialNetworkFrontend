import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { ErrorComponent } from "../error/error.component";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
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
    ReactiveFormsModule,
  ],
  templateUrl: "./edit-profile.component.html",
  styleUrl: "./edit-profile.component.css",
})
export class EditProfileComponent {
  imagePreview: string | ArrayBuffer | null = null;
  selectedFile!: File;
  loading: boolean = false;
  completato: boolean = false;
  profileForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.profileForm = this.fb.group(
      {
        firstName: [""],
        lastName: [""],
        bio: [""],
        image: [null],
      },
      {
        validators: this.atLeastOneRequiredValidator([
          "firstName",
          "lastName",
          "bio",
          "image",
        ]),
      }
    );
  }

  atLeastOneRequiredValidator(fields: string[]): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const atLeastOneFilled = fields.some((field) => {
        const control = form.get(field);
        return control && control.value;
      });
      return atLeastOneFilled ? null : { atLeastOneRequired: true };
    };
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    this.selectedFile = file;
    this.profileForm.patchValue({ image: file });
    this.profileForm.get("image")!.updateValueAndValidity();
    reader.readAsDataURL(file);
  }

  async onSubmit() {
    if (this.profileForm.invalid) {
      return;
    }
    this.loading = true;
    let base64String;
    if (this.profileForm.get("image")?.value)
      base64String = await this.convertFileToBase64(
        this.profileForm.get("image")?.value
      );
    await firstValueFrom(
      this.userService.updateProfileUser({
        body: {
          bio: this.profileForm.get("bio")?.value ?? "",
          email: this.profileForm.get("email")?.value ?? "",
          firstName: this.profileForm.get("firstName")?.value ?? "",
          lastName: this.profileForm.get("lastName")?.value ?? "",
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
