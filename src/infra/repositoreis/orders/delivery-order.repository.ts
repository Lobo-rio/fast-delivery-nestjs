import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DeliveryOrdersInterfaceRepository } from '../../../domain/enterprise/repositoreis/orders/delivery-orders-interface.repository';
import { DeliveryFile } from '../../../infra/entities/orders/delivery-file.entity';
import { CreateDeliveryOrderDto } from 'src/helpers/dtos/orders/create-delivery-order.dto';

@Injectable()
export class DeliveryOrderRepository
  implements DeliveryOrdersInterfaceRepository
{
  constructor(
    @InjectRepository(DeliveryFile)
    private readonly deliveryOrderRepository: Repository<DeliveryFile>,
  ) {}

  async create(data: CreateDeliveryOrderDto): Promise<void> {
    try {
      await this.deliveryOrderRepository.save(
        this.deliveryOrderRepository.create(data),
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}
