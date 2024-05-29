/* tslint:disable */

import { CommentUserResponse } from "./comment-user-response";

/* eslint-disable */
export interface CommentCreateRequest {
  comment: string;
  commentRepliedId?: CommentUserResponse;
  postId: number;
}
