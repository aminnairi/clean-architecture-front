import { onMounted, ref } from "vue";
import { UserInterface } from "@domain/entities/user";
import { GetUsersUsecase } from "@domain/usecases/get-users";
import { UserPresenter } from "../adapters/presenters/user"
import { UserService } from "../adapters/services/user";

export const users = ref<Array<UserInterface>>([]);
export const error = ref<Error | null>(null);

export const getUsers = () => {
  const presenter = new UserPresenter(users, error);
  const service = new UserService();
  const usecase = new GetUsersUsecase(service, presenter);

  usecase.execute();
};
