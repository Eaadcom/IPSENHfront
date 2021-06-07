import {LikeMatchInterface} from '../interfaces/like-match-interface';
import {MessageResponse} from './message-response.model';
import {User} from '../../user/models/user';

export class LikeMatchResponse implements LikeMatchInterface {
  constructor(
    public id?: string,
    public created_at?: Date,
    public updated_at?: Date,
    public messages?: MessageResponse[],
    public matched_user?: User,
    public showNotification?: boolean
  ) {}
}
