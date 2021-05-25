import {UserInterface} from '../../user/interfaces/user-interface';

export interface LoginResponse {
  api_token: string;
  user: UserInterface;
}
