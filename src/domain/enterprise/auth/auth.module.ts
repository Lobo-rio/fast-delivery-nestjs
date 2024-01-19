import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '../../../infra/entities/users/user.entity';
import { UserRepository } from '../../../infra/repositoreis/users/users.repository';
import { LoginDeliveryManService } from '../../../domain/application/auth/login-deliveryman.service';
import { AuthController } from '../../../infra/controllers/auth/auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    LoginDeliveryManService,
    {
      provide: 'UsersInterfaceRepository',
      useClass: UserRepository,
    },
  ],
  controllers: [AuthController],
  exports: [LoginDeliveryManService],
})
export class AuthModule {}
