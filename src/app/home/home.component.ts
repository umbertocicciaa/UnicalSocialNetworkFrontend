import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { UserService } from "../api/services";
import { firstValueFrom } from "rxjs";
import { UserResponse } from "../api/models";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterModule, MatSidenavModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  private currentUser: UserResponse = {};

  constructor(private userService: UserService, private router: Router) {}

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

  logout() {}
}
