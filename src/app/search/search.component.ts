import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserService } from "../api/services";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  query: string = "";
  results: Array<{ username: string; fullName: string; avatar: string }> = [];

  private users = [
    {
      username: "john_doe",
      fullName: "John Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "user123",
      fullName: "User OneTwoThree",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "john_doe",
      fullName: "John Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "user123",
      fullName: "User OneTwoThree",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "john_doe",
      fullName: "John Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "user123",
      fullName: "User OneTwoThree",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "john_doe",
      fullName: "John Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "user123",
      fullName: "User OneTwoThree",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "john_doe",
      fullName: "John Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "user123",
      fullName: "User OneTwoThree",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "john_doe",
      fullName: "John Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "user123",
      fullName: "User OneTwoThree",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "john_doe",
      fullName: "John Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "user123",
      fullName: "User OneTwoThree",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "john_doe",
      fullName: "John Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "user123",
      fullName: "User OneTwoThree",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "john_doe",
      fullName: "John Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      username: "user123",
      fullName: "User OneTwoThree",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  constructor(private userService: UserService) {}

  onSearch() {
    if (this.query.trim() === "") {
      this.results = [];
    } else {
      this.results = this.users.filter(
        (user) =>
          user.username.toLowerCase().includes(this.query.toLowerCase()) ||
          user.fullName.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  }
}
