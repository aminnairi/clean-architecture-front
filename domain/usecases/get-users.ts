import { UserPresenterInterface } from "@domain/presenters/user";
import { UserServiceInterface } from "@domain/services/user";

export class GetUsersUsecase {
  public constructor(
    private readonly usersService: UserServiceInterface,
    private readonly usersPresenter: UserPresenterInterface
  ) {}

  public async execute(): Promise<void> {
    this.usersPresenter.beforeGetUsers();

    return this.usersService.getUsers().then(users => {
      this.usersPresenter.onGetUsers(users);
    }).catch(error => {
      this.usersPresenter.onGetUsersError(error);
    })
  }
}
