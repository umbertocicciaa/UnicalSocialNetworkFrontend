/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostDeletedResponse } from '../../models/post-deleted-response';

export interface DeletePost$Params {
  postId: number;
}

export function deletePost(http: HttpClient, rootUrl: string, params: DeletePost$Params, context?: HttpContext): Observable<StrictHttpResponse<PostDeletedResponse>> {
  const rb = new RequestBuilder(rootUrl, deletePost.PATH, 'delete');
  if (params) {
    rb.path('postId', params.postId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PostDeletedResponse>;
    })
  );
}

deletePost.PATH = '/api/v1/Post/posts/{postId}';
