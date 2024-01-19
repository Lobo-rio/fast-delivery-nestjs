import { UpdateOrderDto } from '../../../../helpers/dtos/orders/update-order.dto';
import { CreateOrderDto } from '../../../../helpers/dtos/orders/create-order.dto';
import { Order } from '../../../../infra/entities/orders/order.entity';

export interface OrdersInterfaceRepository {
  findById(id: string): Promise<Order>;
  findByNumberOrder(numberOrder: string): Promise<Order>;
  create(data: CreateOrderDto): Promise<Order>;
  updateStatus(id: string, data: UpdateOrderDto): Promise<Order>;
  softDelete(id: string): Promise<void>;
}
