import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { OrdersInterfaceRepository } from '../../enterprise/repositoreis/orders/orders-interface.repository';
import { RecipientsInterfaceRepository } from '../../../domain/enterprise/repositoreis/recipients/recipients-interface.recpository';
import { NodeMailerService } from '../../../core/nodemailer/nodemailer.service';

@Injectable()
export class UpdateDeliveryWithFileOrdersService {
  constructor(
    @Inject('OrdersInterfaceRepository')
    private readonly orderRepository: OrdersInterfaceRepository,
    private readonly recipientRepository: RecipientsInterfaceRepository,
    private readonly sendEmailService: NodeMailerService,
  ) {}

  async execute(file: Express.Multer.File): Promise<boolean> {
    /*const orderExists = await this.orderRepository.findById(id);
    if (!orderExists) {
      throw new NotFoundException('Order is not registered!');
    }

    const recipientExists = await this.recipientRepository.findById(
      orderExists.recipientId,
    );

    await this.sendEmailService.execute({
      name: recipientExists.name,
      email: recipientExists.email,
      status: data.status,
    });*/

    //await this.orderRepository.updateStatus(data.orderId, data);
    console.log(file);
    return true;
  }
}
