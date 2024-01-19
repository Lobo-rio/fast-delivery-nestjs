import { CreateUserDto } from '../../../../helpers/dtos/users/create-user.dto';
import { UpdateUserDto } from '../../../../helpers/dtos/users/update-user.dto';
import { User } from '../../../../infra/entities/users/user.entity';

export interface UsersInterfaceRepository {
  findMany(): Promise<User[]>;
  findById(id: string): Promise<User>;
  findByCpf(cpf: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  create(data: CreateUserDto): Promise<User>;
  update(id: string, data: UpdateUserDto): Promise<User>;
  softDelete(id: string): Promise<void>;
}
