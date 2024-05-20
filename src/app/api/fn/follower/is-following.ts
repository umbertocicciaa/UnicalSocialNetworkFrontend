/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { IsFollowingResponse } from '../../models/is-following-response';

export interface IsFollowing$Params {
  user: number;
  userToFollow: number;
}

export function isFollowing(http: HttpClient, rootUrl: string, params: IsFollowing$Params, context?: HttpContext): Observable<StrictHttpResponse<IsFollowingResponse>> {
  const rb = new RequestBuilder(rootUrl, isFollowing.PATH, 'get');
  if (params) {
    rb.path('user', params.user, {});
    rb.path('userToFollow', params.userToFollow, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<IsFollowingResponse>;
    })
  );
}

isFollowing.PATH = '/api/v1/Follower/following/{user}/{userToFollow}';
