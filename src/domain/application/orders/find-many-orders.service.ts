import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { OrdersInterfaceRepository } from '../../enterprise/repositoreis/orders/orders-interface.repository';

@Injectable()
export class FindManyOrdersService {
  constructor(
    @Inject('OrdersInterfaceRepository')
    private readonly orderRepository: OrdersInterfaceRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const orderExists = await this.orderRepository.findById(id);
    if (!orderExists) {
      throw new NotFoundException('Order is not registered!');
    }

    if (orderExists.status === 'Em analise') {
      await this.orderRepository.softDelete(id);
    } else {
      throw new BadRequestException('Order cannot be deleted!');
    }
  }
}
