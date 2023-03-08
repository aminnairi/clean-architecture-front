import { onMounted, ref } from "vue";
import { UserInterface } from "@domain/entities/user";
import { GetUsersUsecase } from "@domain/usecases/get-users";
import { UserPresenter } from "../adapters/presenters/user"
import { UserService } from "../adapters/services/user";

export const useGetUsers = () => {
  const users = ref<Array<UserInterface>>([]);
  const error = ref<Error | null>(null);

  const getUsers = () => {
    const presenter = new UserPresenter(users, error);
    const service = new UserService();
    const usecase = new GetUsersUsecase(service, presenter);

    usecase.execute();
  };

  onMounted(() => {
    getUsers();
  });

  return {
    users,
    error,
    getUsers
  };
};
