/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getLoggedUsers } from '../fn/user/get-logged-users';
import { GetLoggedUsers$Params } from '../fn/user/get-logged-users';
import { getTotalUsers } from '../fn/user/get-total-users';
import { GetTotalUsers$Params } from '../fn/user/get-total-users';
import { getUserByUsername } from '../fn/user/get-user-by-username';
import { GetUserByUsername$Params } from '../fn/user/get-user-by-username';
import { getUserLikeUsername } from '../fn/user/get-user-like-username';
import { GetUserLikeUsername$Params } from '../fn/user/get-user-like-username';
import { getUsers } from '../fn/user/get-users';
import { GetUsers$Params } from '../fn/user/get-users';
import { getUsersById } from '../fn/user/get-users-by-id';
import { GetUsersById$Params } from '../fn/user/get-users-by-id';
import { getUsersOrderedBySignUp } from '../fn/user/get-users-ordered-by-sign-up';
import { GetUsersOrderedBySignUp$Params } from '../fn/user/get-users-ordered-by-sign-up';
import { UserCountResponse } from '../models/user-count-response';
import { UserResponse } from '../models/user-response';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUsers()` */
  static readonly GetUsersPath = '/api/v1/User/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers$Response(params?: GetUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserResponse>>> {
    return getUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsers(params?: GetUsers$Params, context?: HttpContext): Observable<Array<UserResponse>> {
    return this.getUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserResponse>>): Array<UserResponse> => r.body)
    );
  }

  /** Path part for operation `getUsersById()` */
  static readonly GetUsersByIdPath = '/api/v1/User/users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsersById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersById$Response(params: GetUsersById$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
    return getUsersById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsersById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersById(params: GetUsersById$Params, context?: HttpContext): Observable<UserResponse> {
    return this.getUsersById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponse>): UserResponse => r.body)
    );
  }

  /** Path part for operation `getUserLikeUsername()` */
  static readonly GetUserLikeUsernamePath = '/api/v1/User/users/username';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserLikeUsername()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserLikeUsername$Response(params: GetUserLikeUsername$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserResponse>>> {
    return getUserLikeUsername(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserLikeUsername$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserLikeUsername(params: GetUserLikeUsername$Params, context?: HttpContext): Observable<Array<UserResponse>> {
    return this.getUserLikeUsername$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserResponse>>): Array<UserResponse> => r.body)
    );
  }

  /** Path part for operation `getUserByUsername()` */
  static readonly GetUserByUsernamePath = '/api/v1/User/users/username/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByUsername()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByUsername$Response(params: GetUserByUsername$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
    return getUserByUsername(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserByUsername$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByUsername(params: GetUserByUsername$Params, context?: HttpContext): Observable<UserResponse> {
    return this.getUserByUsername$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponse>): UserResponse => r.body)
    );
  }

  /** Path part for operation `getTotalUsers()` */
  static readonly GetTotalUsersPath = '/api/v1/User/total-users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTotalUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalUsers$Response(params: GetTotalUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<UserCountResponse>> {
    return getTotalUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTotalUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalUsers(params: GetTotalUsers$Params, context?: HttpContext): Observable<UserCountResponse> {
    return this.getTotalUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserCountResponse>): UserCountResponse => r.body)
    );
  }

  /** Path part for operation `getUsersOrderedBySignUp()` */
  static readonly GetUsersOrderedBySignUpPath = '/api/v1/User/ordered-users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsersOrderedBySignUp()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersOrderedBySignUp$Response(params?: GetUsersOrderedBySignUp$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserResponse>>> {
    return getUsersOrderedBySignUp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsersOrderedBySignUp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersOrderedBySignUp(params?: GetUsersOrderedBySignUp$Params, context?: HttpContext): Observable<Array<UserResponse>> {
    return this.getUsersOrderedBySignUp$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserResponse>>): Array<UserResponse> => r.body)
    );
  }

  /** Path part for operation `getLoggedUsers()` */
  static readonly GetLoggedUsersPath = '/api/v1/User/logged-users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLoggedUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLoggedUsers$Response(params?: GetLoggedUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
    return getLoggedUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLoggedUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLoggedUsers(params?: GetLoggedUsers$Params, context?: HttpContext): Observable<UserResponse> {
    return this.getLoggedUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponse>): UserResponse => r.body)
    );
  }

}
