import { CreateDeliveryOrderDto } from '../../../../helpers/dtos/orders/create-delivery-order.dto';

export interface DeliveryOrdersInterfaceRepository {
  create(data: CreateDeliveryOrderDto): Promise<void>;
}
