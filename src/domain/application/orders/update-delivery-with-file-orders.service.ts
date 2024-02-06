import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';

import { OrdersInterfaceRepository } from '../../enterprise/repositoreis/orders/orders-interface.repository';
import { RecipientsInterfaceRepository } from '../../../domain/enterprise/repositoreis/recipients/recipients-interface.recpository';
import { NodeMailerService } from '../../../core/nodemailer/nodemailer.service';
import { DeliveryOrdersInterfaceRepository } from 'src/domain/enterprise/repositoreis/orders/delivery-orders-interface.repository';

type UploadDeliveryFileRequest = {
  delivered: boolean;
  returned: boolean;
  status: string;
};

type SaveDeliveryFileRequest = {
  orderId: string;
  fileName: string;
  url: string;
};

@Injectable()
export class UpdateDeliveryWithFileOrdersService {
  constructor(
    @Inject('OrdersInterfaceRepository')
    private readonly orderRepository: OrdersInterfaceRepository,
    @Inject('RecipientsInterfaceRepository')
    private readonly recipientRepository: RecipientsInterfaceRepository,
    @Inject('DeliveryOrdersInterfaceRepository')
    private readonly deliveryOrderRepository: DeliveryOrdersInterfaceRepository,
    private readonly sendEmailService: NodeMailerService,
  ) {}

  async execute(
    id: string,
    file: Express.Multer.File,
    req: Request,
  ): Promise<boolean> {
    const orderExists = await this.orderRepository.findById(id);
    if (!orderExists) {
      throw new NotFoundException('Order is not registered!');
    }

    const recipientExists = await this.recipientRepository.findById(
      orderExists.recipientId,
    );

    const data: UploadDeliveryFileRequest = {
      delivered: false,
      returned: false,
      status: 'Entregue',
    };

    const save: SaveDeliveryFileRequest = {
      orderId: orderExists.id,
      fileName: file.filename,
      url: `${req.protocol}://${req.get('host')}/uploads/${file.filename}`,
    };

    await this.sendEmailService.execute({
      name: recipientExists.name,
      email: recipientExists.email,
      status: data.status,
    });

    await this.orderRepository.updateStatus(id, data);

    await this.SaveDeliveryFile(save);

    return true;
  }

  private async SaveDeliveryFile(data: SaveDeliveryFileRequest) {
    await this.deliveryOrderRepository.create(data);
  }
}
