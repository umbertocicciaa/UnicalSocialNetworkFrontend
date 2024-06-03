import { CommonModule } from "@angular/common";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { WebSocketService } from "../api/services/websocket.service";
import { FormsModule } from "@angular/forms";
import { Subscription, firstValueFrom } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ConversationService } from "../api/services/conversation.service";

@Component({
  selector: "app-message",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./message.component.html",
  styleUrl: "./message.component.css",
})
export class MessageComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  newMessage: string = "";
  conversationId: number = -1;
  recipientId: number = -1;
  userId: number = -1;
  private messagesSubscription!: Subscription;

  constructor(
    private webSocketService: WebSocketService,
    private route: ActivatedRoute,
    private conversationService: ConversationService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.recipientId = params["destId"];
      this.userId = params["userId"];
    });
    console.log(this.userId, this.recipientId);
  }

  async ngOnInit() {
    await firstValueFrom(
      this.conversationService.getConversations({
        sender: this.userId,
        reciver: this.recipientId,
      })
    ).then((id) => (this.conversationId = id));
    this.messagesSubscription = this.webSocketService.messages$.subscribe(
      (messages) => {
        this.messages = messages;
      }
    );
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const message = {
        text: this.newMessage,
        recipient: { id: this.recipientId },
      };
      this.webSocketService.sendMessage(message);
      this.newMessage = "";
    }
  }

  ngOnDestroy(): void {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
  }
}
