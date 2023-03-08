import { UserInterface } from "@domain/entities/user";
import { UserPresenterInterface } from "@domain/presenters/user";
import { Ref } from "vue";

export class UserPresenter implements UserPresenterInterface {
  public constructor(private readonly users: Ref<Array<UserInterface>>, private readonly error: Ref<Error | null>) {}

  public onGetUsers(users: Array<UserInterface>): void {
    this.users.value = users;
  }

  public onGetUsersError(error: Error): void {
    this.error.value = error;
  }

  public beforeGetUsers() {
    this.error.value = null;
  }
}
