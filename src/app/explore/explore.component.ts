import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { PostComponent } from "../post/post.component";

@Component({
  selector: "app-explore",
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: "./explore.component.html",
  styleUrl: "./explore.component.css",
})
export class ExploreComponent {
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
}