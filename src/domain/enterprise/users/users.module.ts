import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateUsersService } from '../../../domain/application/users/create-users.service';
import { DeleteUsersService } from '../../../domain/application/users/delete-users.service';
import { FindByCpfUsersService } from '../../../domain/application/users/findbycpf-users.service';
import { FindByEmailUsersService } from '../../../domain/application/users/findbyemail-users.service';
import { FindByIdUsersService } from '../../../domain/application/users/findbyid-users.service';
import { FindManyUsersService } from '../../../domain/application/users/findmany-users.service';
import { UpdateUsersService } from '../../../domain/application/users/update-users.service';

import { UsersController } from '../../../infra/controllers/users/users.controller';

import { UserRepository } from '../../../infra/repositoreis/users/users.repository';
import { User } from '../../../infra/entities/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    CreateUsersService,
    UpdateUsersService,
    DeleteUsersService,
    FindByIdUsersService,
    FindByEmailUsersService,
    FindByCpfUsersService,
    FindManyUsersService,
    {
      provide: 'UsersInterfaceRepository',
      useClass: UserRepository,
    },
  ],
  controllers: [UsersController],
  exports: [
    CreateUsersService,
    UpdateUsersService,
    DeleteUsersService,
    FindByIdUsersService,
    FindByEmailUsersService,
    FindByCpfUsersService,
    FindManyUsersService,
  ],
})
export class UsersModule {}
