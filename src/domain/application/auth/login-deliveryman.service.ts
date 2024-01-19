import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { LoginDeliveryManDto } from '../../../helpers/dtos/auth/login-deliveryman.dto';
import { UsersInterfaceRepository } from '../../../domain/enterprise/repositoreis/users/users-interface.repository';

@Injectable()
export class LoginDeliveryManService {
  constructor(
    @Inject('UsersInterfaceRepository')
    private readonly userRepository: UsersInterfaceRepository,
  ) {}

  async execute(data: LoginDeliveryManDto) {
    const user = await this.userRepository.findByCpf(data.cpf);
    if (!user) throw new NotFoundException('User is not registered!');
  }
}
