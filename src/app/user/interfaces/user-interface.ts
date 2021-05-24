export interface UserInterface {
  id: string;
  email: string;
  password: string;
  apiToken: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dateOfBirth: Date;
  aboutMe: string;
  ageRangeBottom: number;
  ageRangeTop: number;
  maxDistance: string;
  interest: string;
  createdAt: Date;
  updatedAt: Date;
}
