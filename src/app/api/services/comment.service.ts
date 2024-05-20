/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CommentCreatedResponse } from '../models/comment-created-response';
import { CommentDeletedResponse } from '../models/comment-deleted-response';
import { CommentResponse } from '../models/comment-response';
import { createComment } from '../fn/comment/create-comment';
import { CreateComment$Params } from '../fn/comment/create-comment';
import { deleteComment } from '../fn/comment/delete-comment';
import { DeleteComment$Params } from '../fn/comment/delete-comment';
import { getComment } from '../fn/comment/get-comment';
import { GetComment$Params } from '../fn/comment/get-comment';

@Injectable({ providedIn: 'root' })
export class CommentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createComment()` */
  static readonly CreateCommentPath = '/api/v1/Comment/comments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createComment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createComment$Response(params: CreateComment$Params, context?: HttpContext): Observable<StrictHttpResponse<CommentCreatedResponse>> {
    return createComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createComment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createComment(params: CreateComment$Params, context?: HttpContext): Observable<CommentCreatedResponse> {
    return this.createComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommentCreatedResponse>): CommentCreatedResponse => r.body)
    );
  }

  /** Path part for operation `getComment()` */
  static readonly GetCommentPath = '/api/v1/Comment/comments/{post_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getComment()` instead.
   *
   * This method doesn't expect any request body.
   */
  getComment$Response(params: GetComment$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentResponse>>> {
    return getComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getComment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getComment(params: GetComment$Params, context?: HttpContext): Observable<Array<CommentResponse>> {
    return this.getComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CommentResponse>>): Array<CommentResponse> => r.body)
    );
  }

  /** Path part for operation `deleteComment()` */
  static readonly DeleteCommentPath = '/api/v1/Comment/comments/{comment_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteComment()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComment$Response(params: DeleteComment$Params, context?: HttpContext): Observable<StrictHttpResponse<CommentDeletedResponse>> {
    return deleteComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteComment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComment(params: DeleteComment$Params, context?: HttpContext): Observable<CommentDeletedResponse> {
    return this.deleteComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<CommentDeletedResponse>): CommentDeletedResponse => r.body)
    );
  }

}
