import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../api/services";
import { TokenService } from "../token/token.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  errorMessage: string = "";
  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  onSubmit() {
    if (this.username && this.password) {
      this.authService
        .authenticate({
          body: {
            username: this.username,
            password: this.password,
          },
        })
        .subscribe({
          next: (res) => {
            this.tokenService.token = res.access_token as string;
            this.router.navigate(["home"]);
          },
          error: (err) => {
            this.errorMessage = "Invalid username or password";
            console.log(err);
          },
        });
    }
  }
}
