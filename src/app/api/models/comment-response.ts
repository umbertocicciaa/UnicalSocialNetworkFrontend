/* tslint:disable */
/* eslint-disable */
import { CommentUserResponse } from "../models/comment-user-response";
export interface CommentResponse {
  comment?: string;
  createdByUserid?: CommentUserResponse;
  createdDatetime?: string;
  id?: number;
  postId?: number;
}
