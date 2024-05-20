/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EsisteMipiaceResponse } from '../../models/esiste-mipiace-response';

export interface Exists$Params {
  post_Id: number;
}

export function exists(http: HttpClient, rootUrl: string, params: Exists$Params, context?: HttpContext): Observable<StrictHttpResponse<EsisteMipiaceResponse>> {
  const rb = new RequestBuilder(rootUrl, exists.PATH, 'get');
  if (params) {
    rb.path('post_Id', params.post_Id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EsisteMipiaceResponse>;
    })
  );
}

exists.PATH = '/api/v1/Mipiace/mipiace/{post_Id}';
