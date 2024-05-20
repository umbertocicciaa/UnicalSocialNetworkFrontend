/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FollowingNumberResponse } from '../../models/following-number-response';

export interface CountFollowing$Params {
  user_id: number;
}

export function countFollowing(http: HttpClient, rootUrl: string, params: CountFollowing$Params, context?: HttpContext): Observable<StrictHttpResponse<FollowingNumberResponse>> {
  const rb = new RequestBuilder(rootUrl, countFollowing.PATH, 'get');
  if (params) {
    rb.path('user_id', params.user_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FollowingNumberResponse>;
    })
  );
}

countFollowing.PATH = '/api/v1/Follower/following-total/{user_id}';
