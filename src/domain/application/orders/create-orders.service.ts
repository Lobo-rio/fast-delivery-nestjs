import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { OrdersInterfaceRepository } from '../../enterprise/repositoreis/orders/orders-interface.repository';
import { RecipientsInterfaceRepository } from '../../../domain/enterprise/repositoreis/recipients/recipients-interface.recpository';
import { UsersInterfaceRepository } from '../../../domain/enterprise/repositoreis/users/users-interface.repository';

import { CreateOrderDto } from '../../../helpers/dtos/orders/create-order.dto';
import { Order } from '../../../infra/entities/orders/order.entity';

@Injectable()
export class CreateOrdersService {
  constructor(
    @Inject('OrdersInterfaceRepository')
    private readonly orderRepository: OrdersInterfaceRepository,
    @Inject('RecipientsInterfaceRepository')
    private readonly recipientRepository: RecipientsInterfaceRepository,
    @Inject('UsersInterfaceRepository')
    private readonly userRepository: UsersInterfaceRepository,
  ) {}

  async execute(data: CreateOrderDto): Promise<Order> {
    const recipientExists = await this.recipientRepository.findById(
      data.recipientId,
    );
    if (!recipientExists) {
      throw new NotFoundException('Recipient is not registered!');
    }

    const orderExists = await this.orderRepository.findByNumberOrder(
      data.numberOrder,
    );
    if (orderExists) {
      throw new ConflictException('Number order already registered!');
    }

    const userExists = await this.userRepository.findById(data.deliveryManId);
    if (userExists.roles === 'admin') {
      throw new NotFoundException(
        'User is not registered as a delivery person!',
      );
    }

    return await this.orderRepository.create(data);
  }
}
