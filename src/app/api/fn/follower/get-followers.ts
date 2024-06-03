/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { StrictHttpResponse } from "../../strict-http-response";
import { RequestBuilder } from "../../request-builder";

import { UserResponse } from "../../models/user-response";

export interface GetFollowers$Params {
  page?: number;
}

export function getFollowers(
  http: HttpClient,
  rootUrl: string,
  params?: GetFollowers$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<Array<UserResponse>>> {
  const rb = new RequestBuilder(rootUrl, getFollowers.PATH, "get");
  if (params) {
    rb.query("page", params.page, {});
  }

  return http
    .request(
      rb.build({
        responseType: "json",
        accept: "application/hal+json",
        context,
      })
    )
    .pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserResponse>>;
      })
    );
}

getFollowers.PATH = "/api/v1/Follower/following";
