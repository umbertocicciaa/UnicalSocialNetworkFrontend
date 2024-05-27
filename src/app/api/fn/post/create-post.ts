/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { StrictHttpResponse } from "../../strict-http-response";
import { RequestBuilder } from "../../request-builder";

import { PostCreatedResponse } from "../../models/post-created-response";
import { PostCreateRequest } from "../../models/post-create-request";

export interface CreatePost$Params {
  body: PostCreateRequest;
}

export function createPost(
  http: HttpClient,
  rootUrl: string,
  params: CreatePost$Params,
  context?: HttpContext
): Observable<StrictHttpResponse<PostCreatedResponse>> {
  const rb = new RequestBuilder(rootUrl, createPost.PATH, "post");
  if (params) {
    rb.body(params.body, "application/json");
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
        return r as StrictHttpResponse<PostCreatedResponse>;
      })
    );
}

createPost.PATH = "/api/v1/Post/posts/posts";
