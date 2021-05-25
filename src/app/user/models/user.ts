import {UserInterface} from '../interfaces/user-interface';

export class User implements UserInterface {

  constructor(
    public id: string,
    public email: string,
    public password: string,
    public api_token: string,
    public first_name: string,
    public middle_name: string,
    public last_name: string,
    public gender: string,
    public date_of_birth: Date,
    public about_me: string,
    public age_range_bottom: number,
    public age_range_top: number,
    public max_distance: number,
    public interest: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

}
