import { UserInterfaceResponse } from '../../../helpers/interfaces/users/users.interface';
import { CreateUserDto } from '../../../helpers/dtos/users/create-user.dto';
import { User } from '../../../infra/entities/users/user.entity';

export class UserConverter {
  async request(data: CreateUserDto) {
    return {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      roles: data.roles,
      isActive: data.isActive,
    };
  }

  async response(data: User): Promise<UserInterfaceResponse> {
    const user: UserInterfaceResponse = {
      id: data.id,
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      roles: data.roles,
      isActive: data.isActive,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      deletedAt: data.deletedAt,
    };

    return user;
  }
}
