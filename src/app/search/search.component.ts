import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserService } from "../api/services";
import { firstValueFrom } from "rxjs";
import { UserResponse } from "../api/models";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { Router } from "@angular/router";
import { UserSearchResultComponent } from "../user-search-result/user-search-result.component";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    SpinnerLoadComponent,
    UserSearchResultComponent,
  ],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent implements OnInit {
  query: string = "";
  users: UserResponse[] = [];
  loading: boolean = false;
  private page: number = 0;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  async onSearch() {
    let query = this.query.trim();
    if (query !== "") {
      this.loading = true;
      this.users = await firstValueFrom(
        this.userService.getUserLikeUsername({
          username: query,
          page: this.page,
        })
      ).finally(() => (this.loading = false));
    } else {
      this.users = [];
      this.loading = false;
      this.page = 0;
    }
  }

  async onScroll() {
    let query = this.query.trim();
    if (query !== "") {
      this.loading = true;
      this.page++;
      let users = await firstValueFrom(
        this.userService.getUserLikeUsername({
          username: query,
          page: this.page,
        })
      ).finally(() => (this.loading = false));
      this.users.push(...users);
    }
  }

  navigateToProfile(username: string | undefined) {
    if (username) this.router.navigate(["/home/profile/" + username]);
  }
}
