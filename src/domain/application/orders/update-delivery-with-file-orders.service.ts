import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { OrdersInterfaceRepository } from '../../enterprise/repositoreis/orders/orders-interface.repository';
import { RecipientsInterfaceRepository } from '../../../domain/enterprise/repositoreis/recipients/recipients-interface.recpository';
import { NodeMailerService } from '../../../core/nodemailer/nodemailer.service';

@Injectable()
export class UpdateDeliveryWithFileOrdersService {
  constructor(
    @Inject('OrdersInterfaceRepository')
    private readonly orderRepository: OrdersInterfaceRepository,
    @Inject('RecipientsInterfaceRepository')
    private readonly recipientRepository: RecipientsInterfaceRepository,
    private readonly sendEmailService: NodeMailerService,
  ) {}

  async execute(id: string, file: Express.Multer.File): Promise<boolean> {
    /*const status = 'Entregue';
    const orderExists = await this.orderRepository.findById(id);
    if (!orderExists) {
      throw new NotFoundException('Order is not registered!');
    }

    const recipientExists = await this.recipientRepository.findById(
      orderExists.recipientId,
    );

    await this.sendEmailService.execute({
      name: recipientExists.name,
      email: recipientExists.email,
      status: status,
    });

    await this.orderRepository.updateStatus(id, { status });*/
    console.log(id, file);
    return true;
  }
}
