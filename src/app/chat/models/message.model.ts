import {MessageInterface} from '../interfaces/message-interface';

export class Message implements MessageInterface {

  constructor(
    public like_match_id: any,
    public content: string,
    public sender_id?: number,
    public id?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}
}
