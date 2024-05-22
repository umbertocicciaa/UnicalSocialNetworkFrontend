import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { authGuard } from "./guard/auth.guard";
import { RegisterComponent } from "./register/register.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProfileComponent } from "./profile/profile.component";
import { SearchComponent } from "./search/search.component";
import { ExploreComponent } from "./explore/explore.component";
import { CreatePostComponent } from "./create-post/create-post.component";
import { CreateTwitComponent } from "./create-twit/create-twit.component";
import { FriendPostComponent } from "./friend-post/friend-post.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
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
        path: "search",
        component: SearchComponent,
        canActivate: [authGuard],
      },
      {
        path: "explore",
        component: ExploreComponent,
        canActivate: [authGuard],
      },
      {
        path: "createPost",
        component: CreatePostComponent,
        canActivate: [authGuard],
      },
      {
        path: "createTwit",
        component: CreateTwitComponent,
        canActivate: [authGuard],
      },
      {
        path: "friend-post",
        component: FriendPostComponent,
        canActivate: [authGuard],
      },
    ],
    canActivate: [authGuard],
  },
  {
    path: "**", // wildcard route for 404 not found page
    component: NotFoundComponent,
    pathMatch: "full",
  },
];
