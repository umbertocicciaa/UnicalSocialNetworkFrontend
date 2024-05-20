/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EsisteMipiaceResponse } from '../models/esiste-mipiace-response';
import { exists } from '../fn/mipiace/exists';
import { Exists$Params } from '../fn/mipiace/exists';

@Injectable({ providedIn: 'root' })
export class MipiaceService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `exists()` */
  static readonly ExistsPath = '/api/v1/Mipiace/mipiace/{post_Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `exists()` instead.
   *
   * This method doesn't expect any request body.
   */
  exists$Response(params: Exists$Params, context?: HttpContext): Observable<StrictHttpResponse<EsisteMipiaceResponse>> {
    return exists(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `exists$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  exists(params: Exists$Params, context?: HttpContext): Observable<EsisteMipiaceResponse> {
    return this.exists$Response(params, context).pipe(
      map((r: StrictHttpResponse<EsisteMipiaceResponse>): EsisteMipiaceResponse => r.body)
    );
  }

}
