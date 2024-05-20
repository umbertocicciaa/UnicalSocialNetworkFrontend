/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostByUserResponse } from '../../models/post-by-user-response';

export interface CountPostsByUserId$Params {
  user_id: number;
}

export function countPostsByUserId(http: HttpClient, rootUrl: string, params: CountPostsByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<PostByUserResponse>> {
  const rb = new RequestBuilder(rootUrl, countPostsByUserId.PATH, 'get');
  if (params) {
    rb.path('user_id', params.user_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PostByUserResponse>;
    })
  );
}

countPostsByUserId.PATH = '/api/v1/Post/total-posts/{user_id}';
