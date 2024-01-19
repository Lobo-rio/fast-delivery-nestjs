import { Inject, Injectable } from '@nestjs/common';

import { UsersInterfaceRepository } from '../../enterprise/repositoreis/users/users-interface.repository';
import { UpdateUserDto } from '../../../helpers/dtos/users/update-user.dto';

@Injectable()
export class UpdateUsersService {
  constructor(
    @Inject('UsersInterfaceRepository')
    private readonly userRepository: UsersInterfaceRepository,
  ) {}

  async execute(id: string, data: UpdateUserDto) {
    return await this.userRepository.update(id, data);
  }
}
