import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OrdersInterfaceRepository } from '../../../domain/enterprise/repositoreis/orders/orders-interface.repository';
import { Order } from '../../../infra/entities/orders/order.entity';
import { CreateOrderDto } from '../../../helpers/dtos/orders/create-order.dto';
import { UpdateOrderDto } from '../../../helpers/dtos/orders/update-order.dto';

@Injectable()
export class OrderRepository implements OrdersInterfaceRepository {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async findById(id: string): Promise<Order> {
    try {
      return await this.orderRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByNumberOrder(numberOrder: string): Promise<Order> {
    try {
      return await this.orderRepository.findOne({ where: { numberOrder } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findMany(): Promise<Order[]> {
    try {
      return await this.orderRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(data: CreateOrderDto): Promise<Order> {
    try {
      return await this.orderRepository.save(this.orderRepository.create(data));
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateStatus(id: string, data: UpdateOrderDto): Promise<Order> {
    try {
      const order = await this.findById(id);
      this.orderRepository.merge(order, data);
      return await this.orderRepository.save(order);
    } catch (error) {
      throw new Error(error);
    }
  }

  async softDelete(id: string): Promise<void> {
    try {
      await this.orderRepository.softDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
