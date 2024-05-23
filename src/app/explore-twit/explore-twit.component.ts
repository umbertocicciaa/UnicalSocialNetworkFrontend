import { Component } from "@angular/core";
import { TwitComponent } from "../twit/twit.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-explore-twit",
  standalone: true,
  imports: [TwitComponent, InfiniteScrollModule, CommonModule],
  templateUrl: "./explore-twit.component.html",
  styleUrl: "./explore-twit.component.css",
})
export class ExploreTwitComponent {
  twits = [
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
    {
      user: {
        username: "John Doe",
        handle: "john_doe",
        avatar: "https://via.placeholder.com/40",
      },
      content: "This is a sample tweet content.",
      likes: 5,
      liked: false,
      comments: [
        { user: "Jane Doe", text: "Great tweet!" },
        { user: "User123", text: "Interesting!" },
      ],
      showComments: false,
    },
  ];
  onScroll() {
    console.log("scrolled");
  }
}
