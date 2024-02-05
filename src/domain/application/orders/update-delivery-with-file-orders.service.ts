import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { OrdersInterfaceRepository } from '../../enterprise/repositoreis/orders/orders-interface.repository';

@Injectable()
export class UpdateDeliveryWithFileOrdersService {
  constructor(
    @Inject('OrdersInterfaceRepository')
    private readonly orderRepository: OrdersInterfaceRepository,
  ) {}

  async execute(file: Express.Multer.File): Promise<boolean> {
    /*const orderExists = await this.orderRepository.findById(id);
    if (!orderExists) {
      throw new NotFoundException('Order is not registered!');
    }*/

    //await this.orderRepository.updateStatus(data.orderId, data);
    console.log(file);
    return true;
  }
}
