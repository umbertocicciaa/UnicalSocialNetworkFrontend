/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { publish } from '../fn/message/publish';
import { Publish$Params } from '../fn/message/publish';

@Injectable({ providedIn: 'root' })
export class MessageService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `publish()` */
  static readonly PublishPath = '/api/v1/Message/messages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `publish()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  publish$Response(params: Publish$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return publish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `publish$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  publish(params: Publish$Params, context?: HttpContext): Observable<void> {
    return this.publish$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
