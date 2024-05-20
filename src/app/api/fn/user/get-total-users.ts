/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserCountResponse } from '../../models/user-count-response';

export interface GetTotalUsers$Params {
  username: string;
}

export function getTotalUsers(http: HttpClient, rootUrl: string, params: GetTotalUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<UserCountResponse>> {
  const rb = new RequestBuilder(rootUrl, getTotalUsers.PATH, 'get');
  if (params) {
    rb.query('username', params.username, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserCountResponse>;
    })
  );
}

getTotalUsers.PATH = '/api/v1/User/total-users';
