export interface UserInterface {
  id: string;
  email: string;
  password: string;
  api_token: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  gender: string;
  date_of_birth: Date;
  about_me: string;
  age_range_bottom: number;
  age_range_top: number;
  max_distance: string;
  interest: string;
  createdAt: Date;
  updatedAt: Date;
}
