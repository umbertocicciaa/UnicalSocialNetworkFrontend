/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { BaseService } from "../base-service";
import { ApiConfiguration } from "../api-configuration";
import { StrictHttpResponse } from "../strict-http-response";

import { authenticate } from "../fn/auth/authenticate";
import { Authenticate$Params } from "../fn/auth/authenticate";
import { AuthenticationResponse } from "../models/authentication-response";
import { refreshToken } from "../fn/auth/refresh-token";
import { RefreshToken$Params } from "../fn/auth/refresh-token";
import { register } from "../fn/auth/register";
import { Register$Params } from "../fn/auth/register";

@Injectable({ providedIn: "root" })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `register()` */
  static readonly RegisterPath = "/api/v1/Auth/register";

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(
    params: Register$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return register(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(
    params: Register$Params,
    context?: HttpContext
  ): Observable<AuthenticationResponse> {
    return this.register$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<AuthenticationResponse>
        ): AuthenticationResponse => r.body
      )
    );
  }

  /** Path part for operation `refreshToken()` */
  static readonly RefreshTokenPath = "/api/v1/Auth/refresh-token";

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  refreshToken$Response(
    params?: RefreshToken$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    return refreshToken(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refreshToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  refreshToken(
    params?: RefreshToken$Params,
    context?: HttpContext
  ): Observable<void> {
    return this.refreshToken$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authenticate()` */
  static readonly AuthenticatePath = "/api/v1/Auth/authenticate";

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate$Response(
    params: Authenticate$Params,
    context?: HttpContext
  ): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return authenticate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate(
    params: Authenticate$Params,
    context?: HttpContext
  ): Observable<AuthenticationResponse> {
    return this.authenticate$Response(params, context).pipe(
      map(
        (
          r: StrictHttpResponse<AuthenticationResponse>
        ): AuthenticationResponse => r.body
      )
    );
  }
}
