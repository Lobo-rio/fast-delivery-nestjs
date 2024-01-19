import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { OrdersInterfaceRepository } from '../../enterprise/repositoreis/orders/orders-interface.repository';
import { Order } from '../../../infra/entities/orders/order.entity';
import { UpdateOrderDto } from '../../../helpers/dtos/orders/update-order.dto';

@Injectable()
export class UpdateStatusOrdersService {
  constructor(
    @Inject('OrdersInterfaceRepository')
    private readonly orderRepository: OrdersInterfaceRepository,
  ) {}

  async execute(id: string, data: UpdateOrderDto): Promise<Order> {
    const orderExists = await this.orderRepository.findById(id);
    if (!orderExists) {
      throw new NotFoundException('Order is not registered!');
    }

    this.validatedeliverystatus(orderExists);

    return await this.orderRepository.updateStatus(id, data);
  }

  private validatedeliverystatus(data: Order) {
    switch (data.status) {
      case 'Entregue':
        throw new BadRequestException(
          'The goods have been delivered to the recipient!',
        );
      case 'Devolução':
        throw new BadRequestException('The merchandise was returned!');
      default:
        console.log(`Sorry, the correct status was not found! ${data.status}`);
    }

    return true;
  }
}
