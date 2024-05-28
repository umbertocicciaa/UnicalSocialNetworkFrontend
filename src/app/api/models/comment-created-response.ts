/* tslint:disable */
/* eslint-disable */
import { CommentUserResponse } from "./comment-user-response";
export interface CommentCreatedResponse {
  comment?: string;
  commentRepliedId?: number;
  createdByUserid?: CommentUserResponse;
  createdDate?: string;
  id?: number;
  postId?: number;
}
