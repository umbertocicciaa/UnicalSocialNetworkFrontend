import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { UserResponse } from "../api/models";

@Component({
  selector: "app-user-search-result",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-search-result.component.html",
  styleUrl: "./user-search-result.component.css",
})
export class UserSearchResultComponent {
  @Input()
  user: UserResponse = {};
}
