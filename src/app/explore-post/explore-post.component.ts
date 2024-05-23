import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { PostComponent } from "../post/post.component";
import { PostService } from "../api/services";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { TwitComponent } from "../twit/twit.component";

@Component({
  selector: "app-explore-post",
  standalone: true,
  imports: [CommonModule, PostComponent, TwitComponent, InfiniteScrollModule],
  templateUrl: "./explore-post.component.html",
  styleUrl: "./explore-post.component.css",
})
export class ExplorePostComponent implements OnInit {
  posts: any[] = [
    {
      user: {
        username: "john_doe",
        avatar: "https://via.placeholder.com/32",
      },
      location: "New York, USA",
      image: "https://via.placeholder.com/600",
      caption: "A beautiful day in New York!",
      likes: 120,
      liked: false,
      comments: [
        { user: "jane_doe", text: "Looks amazing!" },
        { user: "user123", text: "Wish I were there!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "john_doe",
        avatar: "https://via.placeholder.com/32",
      },
      location: "New York, USA",
      image: "https://via.placeholder.com/600",
      caption: "A beautiful day in New York!",
      likes: 120,
      liked: false,
      comments: [
        { user: "jane_doe", text: "Looks amazing!" },
        { user: "user123", text: "Wish I were there!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "john_doe",
        avatar: "https://via.placeholder.com/32",
      },
      location: "New York, USA",
      image: "https://via.placeholder.com/600",
      caption: "A beautiful day in New York!",
      likes: 120,
      liked: false,
      comments: [
        { user: "jane_doe", text: "Looks amazing!" },
        { user: "user123", text: "Wish I were there!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "john_doe",
        avatar: "https://via.placeholder.com/32",
      },
      location: "New York, USA",
      image: "https://via.placeholder.com/600",
      caption: "A beautiful day in New York!",
      likes: 120,
      liked: false,
      comments: [
        { user: "jane_doe", text: "Looks amazing!" },
        { user: "user123", text: "Wish I were there!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "john_doe",
        avatar: "https://via.placeholder.com/32",
      },
      location: "New York, USA",
      image: "https://via.placeholder.com/600",
      caption: "A beautiful day in New York!",
      likes: 120,
      liked: false,
      comments: [
        { user: "jane_doe", text: "Looks amazing!" },
        { user: "user123", text: "Wish I were there!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "john_doe",
        avatar: "https://via.placeholder.com/32",
      },
      location: "New York, USA",
      image: "https://via.placeholder.com/600",
      caption: "A beautiful day in New York!",
      likes: 120,
      liked: false,
      comments: [
        { user: "jane_doe", text: "Looks amazing!" },
        { user: "user123", text: "Wish I were there!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "john_doe",
        avatar: "https://via.placeholder.com/32",
      },
      location: "New York, USA",
      image: "https://via.placeholder.com/600",
      caption: "A beautiful day in New York!",
      likes: 120,
      liked: false,
      comments: [
        { user: "jane_doe", text: "Looks amazing!" },
        { user: "user123", text: "Wish I were there!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "john_doe",
        avatar: "https://via.placeholder.com/32",
      },
      location: "New York, USA",
      image: "https://via.placeholder.com/600",
      caption: "A beautiful day in New York!",
      likes: 120,
      liked: false,
      comments: [
        { user: "jane_doe", text: "Looks amazing!" },
        { user: "user123", text: "Wish I were there!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "john_doe",
        avatar: "https://via.placeholder.com/32",
      },
      location: "New York, USA",
      image: "https://via.placeholder.com/600",
      caption: "A beautiful day in New York!",
      likes: 120,
      liked: false,
      comments: [
        { user: "jane_doe", text: "Looks amazing!" },
        { user: "user123", text: "Wish I were there!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "john_doe",
        avatar: "https://via.placeholder.com/32",
      },
      location: "New York, USA",
      image: "https://via.placeholder.com/600",
      caption: "A beautiful day in New York!",
      likes: 120,
      liked: false,
      comments: [
        { user: "jane_doe", text: "Looks amazing!" },
        { user: "user123", text: "Wish I were there!" },
      ],
      showComments: false,
    },
    // Aggiungi altri post qui
  ];
  constructor(private postService: PostService) {}

  async ngOnInit() {
    this.postService.getPosts;
  }

  onScroll() {
    console.log("scrolled");
  }
}
