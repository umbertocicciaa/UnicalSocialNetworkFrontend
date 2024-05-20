/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FollowerNumberResponse } from '../../models/follower-number-response';

export interface CountFollowers$Params {
  user_id: number;
}

export function countFollowers(http: HttpClient, rootUrl: string, params: CountFollowers$Params, context?: HttpContext): Observable<StrictHttpResponse<FollowerNumberResponse>> {
  const rb = new RequestBuilder(rootUrl, countFollowers.PATH, 'get');
  if (params) {
    rb.path('user_id', params.user_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FollowerNumberResponse>;
    })
  );
}

countFollowers.PATH = '/api/v1/Follower/followers-total/{user_id}';
