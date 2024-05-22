import { Component } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
@Component({
  selector: "app-spinner-load",
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: "./spinner-load.component.html",
  styleUrl: "./spinner-load.component.css",
})
export class SpinnerLoadComponent {}
