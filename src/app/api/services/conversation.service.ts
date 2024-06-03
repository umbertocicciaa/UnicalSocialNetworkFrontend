/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { BaseService } from "../base-service";
import { ApiConfiguration } from "../api-configuration";
import { StrictHttpResponse } from "../strict-http-response";
import {
  GetConversations$Params,
  getConversations,
} from "../fn/conversation/get-conversations";

@Injectable({ providedIn: "root" })
export class ConversationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getConversations()` */
  static readonly GetConversationsPath =
    "/api/v1/Conversation/conversations/{sender}/{reciver}";

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getConversations()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConversations$Response(
    params: GetConversations$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<number>> {
    return getConversations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getConversations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getConversations(
    params: GetConversations$Params,
    context?: HttpContext
  ): Observable<number> {
    return this.getConversations$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }
}
