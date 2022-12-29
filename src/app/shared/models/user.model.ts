export interface ICredentials {
  login: string;
  password: string;
}

export interface IUser extends ICredentials {
  id: number;
  fakeToken?: string;
  name: IUserName;
}

export interface IUserName {
  first: string;
  last: string;
}
