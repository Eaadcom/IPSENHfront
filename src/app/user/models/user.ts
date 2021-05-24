import {UserInterface} from '../interfaces/user-interface';

export class User implements UserInterface {

  constructor(
    public id: string,
    public email: string,
    public password: string,
    public apiToken: string,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public gender: string,
    public dateOfBirth: Date,
    public aboutMe: string,
    public ageRangeBottom: number,
    public ageRangeTop: number,
    public maxDistance: string,
    public interest: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

}
