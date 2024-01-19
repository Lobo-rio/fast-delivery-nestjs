import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderRepository } from '../../../infra/repositoreis/orders/order.repository';
import { RecipientRepository } from '../../../infra/repositoreis/recipients/recipients.repository';
import { UserRepository } from '../../../infra/repositoreis/users/users.repository';

import { Order } from '../../../infra/entities/orders/order.entity';
import { Recipient } from '../../../infra/entities/recipients/recipient.entity';
import { User } from '../../../infra/entities/users/user.entity';

import { OrdersController } from '../../../infra/controllers/orders/orders.controller';

import { CreateOrdersService } from '../../../domain/application/orders/create-orders.service';
import { UpdateStatusOrdersService } from '../../../domain/application/orders/update-status-orders.service';
import { DeleteOrdersService } from '../../../domain/application/orders/delete-orders.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Recipient, User])],
  providers: [
    CreateOrdersService,
    UpdateStatusOrdersService,
    DeleteOrdersService,
    {
      provide: 'OrdersInterfaceRepository',
      useClass: OrderRepository,
    },
    {
      provide: 'RecipientsInterfaceRepository',
      useClass: RecipientRepository,
    },
    {
      provide: 'UsersInterfaceRepository',
      useClass: UserRepository,
    },
  ],
  controllers: [OrdersController],
  exports: [
    CreateOrdersService,
    UpdateStatusOrdersService,
    DeleteOrdersService,
  ],
})
export class OrdersModule {}
