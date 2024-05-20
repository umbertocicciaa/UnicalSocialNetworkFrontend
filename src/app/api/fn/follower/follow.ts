/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FollowerCreatedResponse } from '../../models/follower-created-response';
import { FollowerRequest } from '../../models/follower-request';

export interface Follow$Params {
      body: FollowerRequest
}

export function follow(http: HttpClient, rootUrl: string, params: Follow$Params, context?: HttpContext): Observable<StrictHttpResponse<FollowerCreatedResponse>> {
  const rb = new RequestBuilder(rootUrl, follow.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FollowerCreatedResponse>;
    })
  );
}

follow.PATH = '/api/v1/Follower/follow';
