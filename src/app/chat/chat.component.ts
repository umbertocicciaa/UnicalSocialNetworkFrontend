import { Component, OnInit } from "@angular/core";
import { FollowerService, UserService } from "../api/services";
import { CommonModule } from "@angular/common";
import { UserResponse } from "../api/models";
import { firstValueFrom } from "rxjs";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { UserSearchResultComponent } from "../user-search-result/user-search-result.component";
import { SpinnerLoadComponent } from "../spinner-load/spinner-load.component";
import { Router } from "@angular/router";
import { ErrorComponent } from "../error/error.component";

@Component({
  selector: "app-chat",
  standalone: true,
  imports: [
    CommonModule,
    InfiniteScrollModule,
    UserSearchResultComponent,
    SpinnerLoadComponent,
    ErrorComponent,
  ],
  templateUrl: "./chat.component.html",
  styleUrl: "./chat.component.css",
})
export class ChatComponent implements OnInit {
  utentiSeguiti: UserResponse[] = [];
  loading: boolean = false;
  error: boolean = false;
  private page: number = 0;
  private loggedUserId = -1;
  constructor(
    private followerService: FollowerService,
    private route: Router,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.loading = true;
    await firstValueFrom(this.userService.getLoggedUsers())
      .then((user) => (this.loggedUserId = user.id ?? -1))
      .catch((error) => (this.error = true));
    await firstValueFrom(this.followerService.getFollowers({ page: this.page }))
      .then((users) => users.forEach((usr) => this.utentiSeguiti.push(usr)))
      .finally(() => (this.loading = false));
  }

  async onScroll() {
    this.page++;
    this.loading = true;
    await firstValueFrom(this.followerService.getFollowers({ page: this.page }))
      .then((users) => users.forEach((usr) => this.utentiSeguiti.push(usr)))
      .finally(() => (this.loading = false));
  }

  goToChat(destId: number | undefined) {
    if (destId)
      this.route.navigate(["/home/chat/message"], {
        queryParams: { destId: destId, userId: this.loggedUserId },
      });
  }
}
