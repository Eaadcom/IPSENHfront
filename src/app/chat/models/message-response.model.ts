import {MessageInterface} from '../interfaces/message-interface';

export class MessageResponse implements MessageInterface {

  constructor(
    public id?: string,
    public like_match_id?: string,
    public content?: string,
    public is_sender?: boolean,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}
}
