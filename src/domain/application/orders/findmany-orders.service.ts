import { Inject, Injectable } from '@nestjs/common';

import { Order } from '../../../infra/entities/orders/order.entity';
import { OrdersInterfaceRepository } from '../../enterprise/repositoreis/orders/orders-interface.repository';

@Injectable()
export class FindManyOrdersService {
  constructor(
    @Inject('OrdersInterfaceRepository')
    private readonly orderRepository: OrdersInterfaceRepository,
  ) {}

  async execute(): Promise<Order[]> {
    return await this.orderRepository.findMany();
  }
}
