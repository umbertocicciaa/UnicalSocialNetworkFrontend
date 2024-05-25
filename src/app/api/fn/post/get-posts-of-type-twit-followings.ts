/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostResponse } from '../../models/post-response';

export interface GetPostsOfTypeTwitFollowings$Params {
  page?: number;
}

export function getPostsOfTypeTwitFollowings(http: HttpClient, rootUrl: string, params?: GetPostsOfTypeTwitFollowings$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostResponse>>> {
  const rb = new RequestBuilder(rootUrl, getPostsOfTypeTwitFollowings.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
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

getPostsOfTypeTwitFollowings.PATH = '/api/v1/Post/posts/twits-followings';
