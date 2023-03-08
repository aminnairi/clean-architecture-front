import { UserInterface } from "@domain/entities/user";
import { GetUsersUsecase } from "@domain/usecases/get-users";
import { useState, useEffect, useCallback } from "react";
import { UserPresenter } from "../adpaters/presenters/user";
import { HttpUserService } from "../adpaters/services/user";

export const useGetUsers = () => {
  const [users, setUsers] = useState<Array<UserInterface>>([]);
  const [error, setError] = useState<Error | null>(null);

  const getUsers = useCallback(() => {
    const presenter = new UserPresenter(setUsers, setError);
    const service = new HttpUserService();
    const usecase = new GetUsersUsecase(service, presenter);
    usecase.execute();
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    error,
    getUsers
  };
};
