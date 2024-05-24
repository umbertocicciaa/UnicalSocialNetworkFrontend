/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addLike } from '../fn/post/add-like';
import { AddLike$Params } from '../fn/post/add-like';
import { countPostsByUserId } from '../fn/post/count-posts-by-user-id';
import { CountPostsByUserId$Params } from '../fn/post/count-posts-by-user-id';
import { createPost } from '../fn/post/create-post';
import { CreatePost$Params } from '../fn/post/create-post';
import { createTwit } from '../fn/post/create-twit';
import { CreateTwit$Params } from '../fn/post/create-twit';
import { deletePost } from '../fn/post/delete-post';
import { DeletePost$Params } from '../fn/post/delete-post';
import { getPosts } from '../fn/post/get-posts';
import { GetPosts$Params } from '../fn/post/get-posts';
import { getPostsById } from '../fn/post/get-posts-by-id';
import { GetPostsById$Params } from '../fn/post/get-posts-by-id';
import { getPostsOfTypePost } from '../fn/post/get-posts-of-type-post';
import { GetPostsOfTypePost$Params } from '../fn/post/get-posts-of-type-post';
import { getPostsOfTypePostByUser } from '../fn/post/get-posts-of-type-post-by-user';
import { GetPostsOfTypePostByUser$Params } from '../fn/post/get-posts-of-type-post-by-user';
import { getPostsOfTypeTwitByUser } from '../fn/post/get-posts-of-type-twit-by-user';
import { GetPostsOfTypeTwitByUser$Params } from '../fn/post/get-posts-of-type-twit-by-user';
import { getPostsOfTypeTwits } from '../fn/post/get-posts-of-type-twits';
import { GetPostsOfTypeTwits$Params } from '../fn/post/get-posts-of-type-twits';
import { getPostsTotal } from '../fn/post/get-posts-total';
import { GetPostsTotal$Params } from '../fn/post/get-posts-total';
import { PostByUserResponse } from '../models/post-by-user-response';
import { PostCountResponse } from '../models/post-count-response';
import { PostCreatedResponse } from '../models/post-created-response';
import { PostDeletedResponse } from '../models/post-deleted-response';
import { PostResponse } from '../models/post-response';
import { TwitCreatedRespose } from '../models/twit-created-respose';

@Injectable({ providedIn: 'root' })
export class PostService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addLike()` */
  static readonly AddLikePath = '/api/v1/Post/posts/posts/likes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addLike()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addLike$Response(params: AddLike$Params, context?: HttpContext): Observable<StrictHttpResponse<PostResponse>> {
    return addLike(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addLike$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addLike(params: AddLike$Params, context?: HttpContext): Observable<PostResponse> {
    return this.addLike$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostResponse>): PostResponse => r.body)
    );
  }

  /** Path part for operation `getPostsOfTypeTwits()` */
  static readonly GetPostsOfTypeTwitsPath = '/api/v1/Post/posts/twits';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostsOfTypeTwits()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsOfTypeTwits$Response(params?: GetPostsOfTypeTwits$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostResponse>>> {
    return getPostsOfTypeTwits(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostsOfTypeTwits$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsOfTypeTwits(params?: GetPostsOfTypeTwits$Params, context?: HttpContext): Observable<Array<PostResponse>> {
    return this.getPostsOfTypeTwits$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PostResponse>>): Array<PostResponse> => r.body)
    );
  }

  /** Path part for operation `createTwit()` */
  static readonly CreateTwitPath = '/api/v1/Post/posts/twits';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTwit()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTwit$Response(params: CreateTwit$Params, context?: HttpContext): Observable<StrictHttpResponse<TwitCreatedRespose>> {
    return createTwit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTwit$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTwit(params: CreateTwit$Params, context?: HttpContext): Observable<TwitCreatedRespose> {
    return this.createTwit$Response(params, context).pipe(
      map((r: StrictHttpResponse<TwitCreatedRespose>): TwitCreatedRespose => r.body)
    );
  }

  /** Path part for operation `getPostsOfTypePost()` */
  static readonly GetPostsOfTypePostPath = '/api/v1/Post/posts/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostsOfTypePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsOfTypePost$Response(params?: GetPostsOfTypePost$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostResponse>>> {
    return getPostsOfTypePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostsOfTypePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsOfTypePost(params?: GetPostsOfTypePost$Params, context?: HttpContext): Observable<Array<PostResponse>> {
    return this.getPostsOfTypePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PostResponse>>): Array<PostResponse> => r.body)
    );
  }

  /** Path part for operation `createPost()` */
  static readonly CreatePostPath = '/api/v1/Post/posts/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost$Response(params: CreatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<PostCreatedResponse>> {
    return createPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPost(params: CreatePost$Params, context?: HttpContext): Observable<PostCreatedResponse> {
    return this.createPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostCreatedResponse>): PostCreatedResponse => r.body)
    );
  }

  /** Path part for operation `getPostsTotal()` */
  static readonly GetPostsTotalPath = '/api/v1/Post/total-posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostsTotal()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsTotal$Response(params?: GetPostsTotal$Params, context?: HttpContext): Observable<StrictHttpResponse<PostCountResponse>> {
    return getPostsTotal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostsTotal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsTotal(params?: GetPostsTotal$Params, context?: HttpContext): Observable<PostCountResponse> {
    return this.getPostsTotal$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostCountResponse>): PostCountResponse => r.body)
    );
  }

  /** Path part for operation `countPostsByUserId()` */
  static readonly CountPostsByUserIdPath = '/api/v1/Post/total-posts/{user_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countPostsByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  countPostsByUserId$Response(params: CountPostsByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<PostByUserResponse>> {
    return countPostsByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countPostsByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countPostsByUserId(params: CountPostsByUserId$Params, context?: HttpContext): Observable<PostByUserResponse> {
    return this.countPostsByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostByUserResponse>): PostByUserResponse => r.body)
    );
  }

  /** Path part for operation `getPosts()` */
  static readonly GetPostsPath = '/api/v1/Post/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts$Response(params?: GetPosts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostResponse>>> {
    return getPosts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts(params?: GetPosts$Params, context?: HttpContext): Observable<Array<PostResponse>> {
    return this.getPosts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PostResponse>>): Array<PostResponse> => r.body)
    );
  }

  /** Path part for operation `getPostsOfTypeTwitByUser()` */
  static readonly GetPostsOfTypeTwitByUserPath = '/api/v1/Post/posts/{user_id}/twits';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostsOfTypeTwitByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsOfTypeTwitByUser$Response(params: GetPostsOfTypeTwitByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostResponse>>> {
    return getPostsOfTypeTwitByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostsOfTypeTwitByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsOfTypeTwitByUser(params: GetPostsOfTypeTwitByUser$Params, context?: HttpContext): Observable<Array<PostResponse>> {
    return this.getPostsOfTypeTwitByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PostResponse>>): Array<PostResponse> => r.body)
    );
  }

  /** Path part for operation `getPostsOfTypePostByUser()` */
  static readonly GetPostsOfTypePostByUserPath = '/api/v1/Post/posts/{user_id}/posts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostsOfTypePostByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsOfTypePostByUser$Response(params: GetPostsOfTypePostByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostResponse>>> {
    return getPostsOfTypePostByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostsOfTypePostByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsOfTypePostByUser(params: GetPostsOfTypePostByUser$Params, context?: HttpContext): Observable<Array<PostResponse>> {
    return this.getPostsOfTypePostByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PostResponse>>): Array<PostResponse> => r.body)
    );
  }

  /** Path part for operation `getPostsById()` */
  static readonly GetPostsByIdPath = '/api/v1/Post/posts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPostsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsById$Response(params: GetPostsById$Params, context?: HttpContext): Observable<StrictHttpResponse<PostResponse>> {
    return getPostsById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPostsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPostsById(params: GetPostsById$Params, context?: HttpContext): Observable<PostResponse> {
    return this.getPostsById$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostResponse>): PostResponse => r.body)
    );
  }

  /** Path part for operation `deletePost()` */
  static readonly DeletePostPath = '/api/v1/Post/posts/{postId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePost$Response(params: DeletePost$Params, context?: HttpContext): Observable<StrictHttpResponse<PostDeletedResponse>> {
    return deletePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePost(params: DeletePost$Params, context?: HttpContext): Observable<PostDeletedResponse> {
    return this.deletePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostDeletedResponse>): PostDeletedResponse => r.body)
    );
  }

}
