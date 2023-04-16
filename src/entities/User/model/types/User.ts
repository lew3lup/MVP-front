export interface GoogleAuthData {
  type: string;
  link: string;
}

export interface UserSchema {
  authData?: GoogleAuthData;

  _inited?: boolean;
}
