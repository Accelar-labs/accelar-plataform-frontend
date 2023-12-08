export interface UserProps {
  name: string
  email: string
  password: string
  profilePicture: string
  sessionToken: string
  createdAt: string
  updatedAt: string
}

export type SignupForm = {
  email: string
  password: string
  googleRecaptchaToken: string
  confirmPassword?: string
  name: string
}

export type SigninForm = {
  email: string
  password: string
}

export type EmailRecoverPassword = {
  email: string
  googleRecaptchaToken: string
}

export type RecoverPassword = {
  newPassword: string
  confirmPassword?: string
  objectId: string
}
