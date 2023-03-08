import { UserInterface } from "@domain/entities/user"

export interface UserServiceInterface {
  getUsers(): Promise<Array<UserInterface>>;
}
