import { Injectable, OnDestroy } from "@angular/core";
import { Client, Message } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WebSocketService implements OnDestroy {
  private stompClient: Client;
  private messagesSubject = new BehaviorSubject<any[]>([]);
  public messages$: Observable<any[]> = this.messagesSubject.asObservable();

  constructor(private http: HttpClient) {
    const socket = new SockJS("http://localhost:8080/ws");
    this.stompClient = new Client({
      webSocketFactory: () => socket as WebSocket,
      reconnectDelay: 5000,
    });

    this.stompClient.onConnect = () => {
      this.stompClient.subscribe("/user/queue/messages", (message: Message) => {
        this.messagesSubject.next([
          ...this.messagesSubject.value,
          JSON.parse(message.body),
        ]);
      });
    };

    this.stompClient.onStompError = (error) => {
      console.error("WebSocket connection error", error);
    };

    this.stompClient.activate();
  }

  sendMessage(message: any): void {
    this.stompClient.publish({
      destination: "/app/chat",
      body: JSON.stringify(message),
    });
  }

  loadMessages(conversationId: number): void {
    this.http.get<any[]>(`/conversations/${conversationId}/messages`).subscribe(
      (messages) => {
        this.messagesSubject.next(messages);
      },
      (error) => {
        console.error("Error loading messages", error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.stompClient) {
      this.stompClient.deactivate();
    }
  }
}
