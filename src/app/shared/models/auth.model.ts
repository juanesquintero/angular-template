export type ILoginSuccessResponse = {
  type: 'Bearer',
  accessToken: string
}

export type ILoginFailureResponse = {
  statusCode: number,
  message: string,
  error: string
}

export type IUser = {
  email: string,
  name: string,
  status: string,
}
