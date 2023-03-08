import { UserInterface } from "@domain/entities/user"
import { UserPresenterInterface } from "@domain/presenters/user"
import { SetStateAction, Dispatch } from "react";

export class UserPresenter implements UserPresenterInterface {
  public constructor(
    private readonly setUsers: Dispatch<SetStateAction<Array<UserInterface>>>,
    private readonly setError: Dispatch<SetStateAction<Error | null>>
  ) {}

  public onGetUsers(users: Array<UserInterface>): void {
    this.setError(null);
    this.setUsers(users);
  }

  public onGetUsersError(error: Error): void {
    this.setError(null);
    this.setError(error);
  }

  public beforeGetUsers() {
    this.setError(null);
  }
}
