import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { UserService } from "../api/services";
import { firstValueFrom } from "rxjs";
import { UserResponse } from "../api/models";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterModule, MatSidenavModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  private currentUser: UserResponse = {};
  private api = "http://localhost:8080/api/v1/auth/logout";
  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    await firstValueFrom(this.userService.getLoggedUsers()).then(
      (user) => (this.currentUser = user)
    );
  }

  async navigateToUsername() {
    if (this.currentUser?.profileName)
      this.router.navigate(["/home/profile/" + this.currentUser?.profileName]);
    else {
      await firstValueFrom(this.userService.getLoggedUsers()).then((user) => {
        this.currentUser = user;
        this.router.navigate([
          "/home/profile/" + this.currentUser?.profileName,
        ]);
      });
    }
  }

  async logout() {
    await firstValueFrom(this.http.post(this.api, undefined)).then(() => {
      localStorage.removeItem("token");
      this.router.navigate(["/login"]);
    });
  }
}
