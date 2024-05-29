import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { authGuard } from "./guard/auth.guard";
import { RegisterComponent } from "./register/register.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProfileComponent } from "./profile/profile.component";
import { SearchComponent } from "./search/search.component";
import { ExplorePostComponent } from "./explore-post/explore-post.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { CreateTwitComponent } from "./create-twit/create-twit.component";
import { FriendPostComponent } from "./friend-post/friend-post.component";
import { ExploreTwitComponent } from "./explore-twit/explore-twit.component";
import { FriendTwitComponent } from "./friend-twit/friend-twit.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ExploreCommentComponent } from "./explore-comment/explore-comment.component";
import { MessageComponent } from "./message/message.component";
import { UserPostComponent } from "./user-post/user-post.component";
import { UserTwitComponent } from "./user-twit/user-twit.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "profile/:username",
        component: ProfileComponent,
        canActivate: [authGuard],
      },
      {
        path: "profile/:id/posts",
        component: UserPostComponent,
        canActivate: [authGuard],
      },
      {
        path: "profile/:id/twits",
        component: UserTwitComponent,
        canActivate: [authGuard],
      },
      {
        path: "search",
        component: SearchComponent,
        canActivate: [authGuard],
      },
      {
        path: "explore-post",
        component: ExplorePostComponent,
        canActivate: [authGuard],
      },
      {
        path: "explore-twit",
        component: ExploreTwitComponent,
        canActivate: [authGuard],
      },
      {
        path: "create-post",
        component: CreatePostComponent,
        canActivate: [authGuard],
      },
      {
        path: "create-twit",
        component: CreateTwitComponent,
        canActivate: [authGuard],
      },
      {
        path: "friend-post",
        component: FriendPostComponent,
        canActivate: [authGuard],
      },
      {
        path: "friend-twit",
        component: FriendTwitComponent,
        canActivate: [authGuard],
      },
      {
        path: "edit-profile",
        component: EditProfileComponent,
        canActivate: [authGuard],
      },
      {
        path: "comments/:postId",
        component: ExploreCommentComponent,
        canActivate: [authGuard],
      },
      {
        path: "message/:userId",
        component: MessageComponent,
        canActivate: [authGuard],
      },
    ],
    canActivate: [authGuard],
  },
  {
    path: "**",
    component: NotFoundComponent,
    pathMatch: "full",
  },
];
