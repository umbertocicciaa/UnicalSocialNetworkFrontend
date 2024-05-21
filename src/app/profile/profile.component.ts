import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.css",
})
export class ProfileComponent {
  username: string = "john_doe";
  fullName: string = "John Doe";
  bio: string =
    "This is a sample bio of the user. It can span multiple lines and provide detailed information.";
  postsCount: number = 34;
  followersCount: number = 1200;
  followingCount: number = 180;
  posts: Array<{ image: string }> = [
    { image: "https://via.placeholder.com/300" },
    { image: "https://via.placeholder.com/300" },
    { image: "https://via.placeholder.com/300" },
  ];
  constructor() {}
}
