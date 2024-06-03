/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { BaseService } from "../base-service";
import { ApiConfiguration } from "../api-configuration";
import { StrictHttpResponse } from "../strict-http-response";

import { countFollowers } from "../fn/follower/count-followers";
import { CountFollowers$Params } from "../fn/follower/count-followers";
import { countFollowing } from "../fn/follower/count-following";
import { CountFollowing$Params } from "../fn/follower/count-following";
import { follow } from "../fn/follower/follow";
import { Follow$Params } from "../fn/follower/follow";
import { FollowerCreatedResponse } from "../models/follower-created-response";
import { FollowerNumberResponse } from "../models/follower-number-response";
import { FollowingNumberResponse } from "../models/following-number-response";
import { isFollowing } from "../fn/follower/is-following";
import { IsFollowing$Params } from "../fn/follower/is-following";
import { IsFollowingResponse } from "../models/is-following-response";
import { UserResponse } from "../models/user-response";
import {
  GetFollowers$Params,
  getFollowers,
} from "../fn/follower/get-followers";

@Injectable({ providedIn: "root" })
export class FollowerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `follow()` */
  static readonly FollowPath = "/api/v1/Follower/follow";

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `follow()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  follow$Response(
    params: Follow$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<FollowerCreatedResponse>> {
    return follow(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `follow$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  follow(
    params: Follow$Params,
    context?: HttpContext
  ): Observable<FollowerCreatedResponse> {
    return this.follow$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<FollowerCreatedResponse>
        ): FollowerCreatedResponse => r.body
      )
    );
  }

  /** Path part for operation `getFollowers()` */
  static readonly GetFollowersPath = "/api/v1/Follower/following";

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFollowers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFollowers$Response(
    params?: GetFollowers$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<UserResponse>>> {
    return getFollowers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFollowers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFollowers(
    params?: GetFollowers$Params,
    context?: HttpContext
  ): Observable<Array<UserResponse>> {
    return this.getFollowers$Response(params, context).pipe(
      map(
        (r: StrictHttpResponse<Array<UserResponse>>): Array<UserResponse> =>
          r.body
      )
    );
  }

  /** Path part for operation `isFollowing()` */
  static readonly IsFollowingPath =
    "/api/v1/Follower/following/{user}/{userToFollow}";

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `isFollowing()` instead.
   *
   * This method doesn't expect any request body.
   */
  isFollowing$Response(
    params: IsFollowing$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<IsFollowingResponse>> {
    return isFollowing(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `isFollowing$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  isFollowing(
    params: IsFollowing$Params,
    context?: HttpContext
  ): Observable<IsFollowingResponse> {
    return this.isFollowing$Response(params, context).pipe(
      map(
        (r: StrictHttpResponse<IsFollowingResponse>): IsFollowingResponse =>
          r.body
      )
    );
  }

  /** Path part for operation `countFollowing()` */
  static readonly CountFollowingPath =
    "/api/v1/Follower/following-total/{user_id}";

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countFollowing()` instead.
   *
   * This method doesn't expect any request body.
   */
  countFollowing$Response(
    params: CountFollowing$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<FollowingNumberResponse>> {
    return countFollowing(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countFollowing$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countFollowing(
    params: CountFollowing$Params,
    context?: HttpContext
  ): Observable<FollowingNumberResponse> {
    return this.countFollowing$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<FollowingNumberResponse>
        ): FollowingNumberResponse => r.body
      )
    );
  }

  /** Path part for operation `countFollowers()` */
  static readonly CountFollowersPath =
    "/api/v1/Follower/followers-total/{user_id}";

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countFollowers()` instead.
   *
   * This method doesn't expect any request body.
   */
  countFollowers$Response(
    params: CountFollowers$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<FollowerNumberResponse>> {
    return countFollowers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countFollowers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countFollowers(
    params: CountFollowers$Params,
    context?: HttpContext
  ): Observable<FollowerNumberResponse> {
    return this.countFollowers$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<FollowerNumberResponse>
        ): FollowerNumberResponse => r.body
      )
    );
  }
}
