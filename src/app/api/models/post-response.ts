/* tslint:disable */
/* eslint-disable */
import { UserPostResponse } from "../models/user-post-response";
export interface PostResponse {
  caption?: string;
  id?: number;
  image?: string;
  like?: number;
  postType?: string;
  user?: UserPostResponse;
}
