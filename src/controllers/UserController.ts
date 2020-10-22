import { CustomRequest, CustomResponse } from '../interfaces';
import UserService from '../services/UsersService';

export default class UserController {
  async getUsers(
    request: CustomRequest,
    response: CustomResponse,
  ): Promise<void> {
    try {
      const userService = new UserService();
      const users = await userService.getUsers();

      response.send(users);
    } catch (e) {
      response.handleHttpError(e);
    }
  }
}
