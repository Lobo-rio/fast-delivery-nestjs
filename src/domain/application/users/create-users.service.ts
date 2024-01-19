import { ConflictException, Inject, Injectable } from '@nestjs/common';

import { CreateUserDto } from '../../../helpers/dtos/users/create-user.dto';
import { UsersInterfaceRepository } from '../../enterprise/repositoreis/users/users-interface.repository';
import { UserConverter } from '../../../helpers/converters/users/user-converter';
import { UserInterfaceResponse } from '../../../helpers/interfaces/users/users.interface';

@Injectable()
export class CreateUsersService {
  constructor(
    @Inject('UsersInterfaceRepository')
    private readonly userRepository: UsersInterfaceRepository,
  ) {}

  async execute(data: CreateUserDto): Promise<UserInterfaceResponse> {
    const userExisted = await this.userRepository.findByEmail(data.email);

    if (userExisted) throw new ConflictException('Registered user!');

    const userConverter = new UserConverter();
    const user = await this.userRepository.create(data);
    return userConverter.response(user);
  }
}
