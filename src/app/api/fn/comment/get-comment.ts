/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommentResponse } from '../../models/comment-response';

export interface GetComment$Params {
  post_id: number;
}

export function getComment(http: HttpClient, rootUrl: string, params: GetComment$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CommentResponse>>> {
  const rb = new RequestBuilder(rootUrl, getComment.PATH, 'get');
  if (params) {
    rb.path('post_id', params.post_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CommentResponse>>;
    })
  );
}

getComment.PATH = '/api/v1/Comment/comments/{post_id}';
