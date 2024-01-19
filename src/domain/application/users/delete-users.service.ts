import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { UsersInterfaceRepository } from '../../enterprise/repositoreis/users/users-interface.repository';

@Injectable()
export class DeleteUsersService {
  constructor(
    @Inject('UsersInterfaceRepository')
    private readonly userRepository: UsersInterfaceRepository,
  ) {}

  async execute(id: string) {
    const userNotExisted = await this.userRepository.findById(id);
    if (!userNotExisted) throw new NotFoundException('User is not registered!');

    await this.userRepository.softDelete(id);
  }
}
