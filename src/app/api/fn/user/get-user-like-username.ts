/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserResponse } from '../../models/user-response';

export interface GetUserLikeUsername$Params {
  username: string;
  page?: number;
}

export function getUserLikeUsername(http: HttpClient, rootUrl: string, params: GetUserLikeUsername$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserResponse>>> {
  const rb = new RequestBuilder(rootUrl, getUserLikeUsername.PATH, 'get');
  if (params) {
    rb.query('username', params.username, {});
    rb.query('page', params.page, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UserResponse>>;
    })
  );
}

getUserLikeUsername.PATH = '/api/v1/User/users/username';
