import {UserInterface} from '../../user/interfaces/user-interface';

export interface LoginResponse {
  apiToken: string;
  user: UserInterface;
}
