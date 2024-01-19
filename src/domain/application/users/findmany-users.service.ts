import { Inject, Injectable } from '@nestjs/common';

import { UsersInterfaceRepository } from '../../enterprise/repositoreis/users/users-interface.repository';

@Injectable()
export class FindManyUsersService {
  constructor(
    @Inject('UsersInterfaceRepository')
    private readonly userRepository: UsersInterfaceRepository,
  ) {}

  async execute() {
    return await this.userRepository.findMany();
  }
}
