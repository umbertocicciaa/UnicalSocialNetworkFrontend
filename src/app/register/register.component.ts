import { Component } from "@angular/core";
import { RegisterRequest } from "../api/models";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../api/services";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  registerRequest: RegisterRequest = {
    email: "",
    profilename: "",
    firstname: "",
    lastname: "",
    password: "",
  };

  email: string = "";
  firstname: string = "";
  username: string = "";
  lastname: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    if (
      this.email &&
      this.firstname &&
      this.lastname &&
      this.username &&
      this.password
    ) {
      this.registerRequest = {
        email: this.email,
        profilename: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
      };

      this.authService
        .register({
          body: this.registerRequest,
        })
        .subscribe({
          next: (res) => {
            this.router.navigate(["home"]);
          },
          error: () => {
            this.errorMessage = "Email o Username gia esistenti";
          },
        });
    }
  }
}
