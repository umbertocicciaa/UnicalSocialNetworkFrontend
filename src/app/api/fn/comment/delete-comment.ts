/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CommentDeletedResponse } from '../../models/comment-deleted-response';

export interface DeleteComment$Params {
  comment_id: number;
}

export function deleteComment(http: HttpClient, rootUrl: string, params: DeleteComment$Params, context?: HttpContext): Observable<StrictHttpResponse<CommentDeletedResponse>> {
  const rb = new RequestBuilder(rootUrl, deleteComment.PATH, 'delete');
  if (params) {
    rb.path('comment_id', params.comment_id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CommentDeletedResponse>;
    })
  );
}

deleteComment.PATH = '/api/v1/Comment/comments/{comment_id}';
