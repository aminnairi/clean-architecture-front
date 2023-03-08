import { UserInterface } from "@domain/entities/user";
import { UserServiceInterface } from "@domain/services/user";
import { z } from "zod";

export class HttpUserService implements UserServiceInterface {
  public async getUsers(): Promise<Array<UserInterface>> {
    return fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      return response.json();
    }).then(json => {
      const getUsersSchema = z.array(z.object({
        id: z.number(),
        email: z.string()
      }));

      const parsedJson = getUsersSchema.safeParse(json);

      if (!parsedJson.success) {
        return Promise.reject(parsedJson.error);
      }

      return parsedJson.data;
    });
  }
}
