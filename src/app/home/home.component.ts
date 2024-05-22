import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AuthService, UserService } from "../api/services";
import { firstValueFrom } from "rxjs";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterModule, MatSidenavModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent implements OnInit {
  private currentUserName: string = "";

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  async ngOnInit() {
    try {
      let user = await firstValueFrom(this.userService.getLoggedUsers());
      this.currentUserName = user.profileName ?? "";
    } catch (err) {}
  }

  navigateToUsername() {
    if (this.currentUserName)
      this.router.navigate(["/home/profile/" + this.currentUserName]);
  }

  logout() {}
}
