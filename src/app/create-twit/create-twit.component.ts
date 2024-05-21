import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
@Component({
  selector: "app-create-twit",
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, CommonModule, MatInputModule],
  templateUrl: "./create-twit.component.html",
  styleUrl: "./create-twit.component.css",
})
export class CreateTwitComponent {
  tweetText: string = "";

  constructor() {}

  onSubmit(): void {
    // Logic to handle the tweet creation
    console.log("Tweet submitted");
    console.log("Text:", this.tweetText);
  }
}