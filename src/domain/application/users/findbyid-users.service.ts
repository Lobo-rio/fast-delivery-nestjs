import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { UsersInterfaceRepository } from '../../enterprise/repositoreis/users/users-interface.repository';
import { UserConverter } from '../../../helpers/converters/users/user-converter';
import { UserInterfaceResponse } from '../../../helpers/interfaces/users/users.interface';

@Injectable()
export class FindByIdUsersService {
  constructor(
    @Inject('UsersInterfaceRepository')
    private readonly userRepository: UsersInterfaceRepository,
  ) {}

  async execute(id: string): Promise<UserInterfaceResponse> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new NotFoundException('User is not registered!');

    const userConverter = new UserConverter();
    return userConverter.response(user);
  }
}
