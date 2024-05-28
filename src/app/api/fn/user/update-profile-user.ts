/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateUserRequest } from '../../models/update-user-request';
import { UserResponse } from '../../models/user-response';

export interface UpdateProfileUser$Params {
      body: UpdateUserRequest
}

export function updateProfileUser(http: HttpClient, rootUrl: string, params: UpdateProfileUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponse>> {
  const rb = new RequestBuilder(rootUrl, updateProfileUser.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserResponse>;
    })
  );
}

updateProfileUser.PATH = '/api/v1/User/users/username';
