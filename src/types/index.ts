export interface IUser {
  gender: string
  name: IUserData
  email: string
  picture: IUserPicture
  nat: string
  id: string
}

export interface IUserData {
  title: string
  first: string
  last: string
}

export interface IUserPicture {
  large: string
  medium: string
  thumbnail: string
}
