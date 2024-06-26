/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostResponse } from '../../models/post-response';

export interface GetPostsOfTypeTwitByUser$Params {
  page?: number;
  user_id: number;
}

export function getPostsOfTypeTwitByUser(http: HttpClient, rootUrl: string, params: GetPostsOfTypeTwitByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostResponse>>> {
  const rb = new RequestBuilder(rootUrl, getPostsOfTypeTwitByUser.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.path('user_id', params.user_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PostResponse>>;
    })
  );
}

getPostsOfTypeTwitByUser.PATH = '/api/v1/Post/posts/twits/{user_id}';
