import {CodesnippetInterface} from '../interfaces/codesnippet.interface';

export class Codesnippet implements CodesnippetInterface{

  constructor(
    public id: number,
    public user_id: number,
    public content: string,
    public language: string,
    public theme: string,
    public created_at: Date,
    public updated_at: Date
  ) {
  }

}
