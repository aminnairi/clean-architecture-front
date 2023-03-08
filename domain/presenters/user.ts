import { UserInterface } from "@domain/entities/user";

export interface UserPresenterInterface {
  beforeGetUsers(): void;
  onGetUsers(users: Array<UserInterface>): void;
  onGetUsersError(error: Error): void;
}
