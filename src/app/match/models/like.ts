import {LikeInterface} from '../interfaces/like-interface';

export class Like implements LikeInterface{

  constructor(
    public user_id?: number,
    public user_id_of_liked_user?: number,
    public type?: string
  ) {}
}
