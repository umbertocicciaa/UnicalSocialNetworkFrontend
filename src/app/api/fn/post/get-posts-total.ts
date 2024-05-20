/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostCountResponse } from '../../models/post-count-response';

export interface GetPostsTotal$Params {
}

export function getPostsTotal(http: HttpClient, rootUrl: string, params?: GetPostsTotal$Params, context?: HttpContext): Observable<StrictHttpResponse<PostCountResponse>> {
  const rb = new RequestBuilder(rootUrl, getPostsTotal.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PostCountResponse>;
    })
  );
}

getPostsTotal.PATH = '/api/v1/Post/total-posts';
