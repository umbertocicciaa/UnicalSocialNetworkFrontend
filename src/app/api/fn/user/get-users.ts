/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserResponse } from '../../models/user-response';

export interface GetUsers$Params {
}

export function getUsers(http: HttpClient, rootUrl: string, params?: GetUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserResponse>>> {
  const rb = new RequestBuilder(rootUrl, getUsers.PATH, 'get');
  if (params) {
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

getUsers.PATH = '/api/v1/User/users';
