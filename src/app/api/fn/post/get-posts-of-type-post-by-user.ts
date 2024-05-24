/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostResponse } from '../../models/post-response';

export interface GetPostsOfTypePostByUser$Params {
  page?: number;
  user_id: number;
}

export function getPostsOfTypePostByUser(http: HttpClient, rootUrl: string, params: GetPostsOfTypePostByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostResponse>>> {
  const rb = new RequestBuilder(rootUrl, getPostsOfTypePostByUser.PATH, 'get');
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

getPostsOfTypePostByUser.PATH = '/api/v1/Post/posts/{user_id}/posts';
