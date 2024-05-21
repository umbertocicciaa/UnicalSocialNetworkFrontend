import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterModule, MatSidenavModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
