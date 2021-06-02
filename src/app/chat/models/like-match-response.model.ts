import {LikeMatchInterface} from '../interfaces/like-match-interface';
import {User} from '../../user/models/user';
import {MessageResponse} from './message-response.model';

export class LikeMatchResponse implements LikeMatchInterface {
  constructor(
    public id?: string,
    public created_at?: Date,
    public updated_at?: Date,
    public messages?: MessageResponse[],
    public matched_user?: User
  ) {}
}
