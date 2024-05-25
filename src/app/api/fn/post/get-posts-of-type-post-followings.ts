/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostResponse } from '../../models/post-response';

export interface GetPostsOfTypePostFollowings$Params {
  page?: number;
}

export function getPostsOfTypePostFollowings(http: HttpClient, rootUrl: string, params?: GetPostsOfTypePostFollowings$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostResponse>>> {
  const rb = new RequestBuilder(rootUrl, getPostsOfTypePostFollowings.PATH, 'get');
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

getPostsOfTypePostFollowings.PATH = '/api/v1/Post/posts/posts-followings';
