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
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "search",
        component: SearchComponent,
      },
      {
        path: "explore",
        component: ExploreComponent,
      },
      {
        path: "createPost",
        component: CreatePostComponent,
      },
      {
        path: "createTwit",
        component: CreateTwitComponent,
      },
    ],
    //canActivate: [authGuard],
  },
  {
    path: "**", // wildcard route for 404 not found page
    component: NotFoundComponent,
    pathMatch: "full",
  },
];
