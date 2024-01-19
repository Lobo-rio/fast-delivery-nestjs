import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { UsersInterfaceRepository } from '../../enterprise/repositoreis/users/users-interface.repository';
import { UserInterfaceResponse } from '../../../helpers/interfaces/users/users.interface';
import { UserConverter } from '../../../helpers/converters/users/user-converter';

@Injectable()
export class FindByCpfUsersService {
  constructor(
    @Inject('UsersInterfaceRepository')
    private readonly userRepository: UsersInterfaceRepository,
  ) {}

  async execute(cpf: string): Promise<UserInterfaceResponse> {
    const user = await this.userRepository.findByCpf(cpf);
    if (!user) throw new NotFoundException('User is not registered!');

    const userConverter = new UserConverter();
    return userConverter.response(user);
  }
}
