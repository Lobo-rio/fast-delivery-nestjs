import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateOrdersService } from '../../../domain/application/orders/create-orders.service';
import { UpdateStatusOrdersService } from '../../../domain/application/orders/update-status-orders.service';
import { DeleteOrdersService } from '../../../domain/application/orders/delete-orders.service';

import { BadRequestSwagger } from '../../../helpers/swagger/errors/bad-request.swagger';
import { NotFoundSwagger } from '../../../helpers/swagger/errors/not-found.swagger';
import { CreateTodoSwagger } from '../../../helpers/swagger/interfaces/orders/create-todo.swagger';
import { UpdateTodoSwagger } from '../../../helpers/swagger/interfaces/orders/update-todo.swagger';

import { CreateOrderDto } from '../../../helpers/dtos/orders/create-order.dto';
import { UpdateOrderDto } from '../../../helpers/dtos/orders/update-order.dto';

@Controller('app/v1/orders')
@ApiTags('Orders')
export class OrdersController {
  constructor(
    private readonly createOrdersService: CreateOrdersService,
    private readonly updateOrdersService: UpdateStatusOrdersService,
    private readonly deleteOrdersService: DeleteOrdersService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({
    status: 200,
    description: 'Returned single order successfully',
    type: CreateTodoSwagger,
    isArray: false,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Recipients not found',
    type: NotFoundSwagger,
  })
  async create(@Body() body: CreateOrderDto) {
    return await this.createOrdersService.execute(body);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update order' })
  @ApiResponse({
    status: 200,
    description: 'Order updated successfully',
    type: UpdateTodoSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
    type: NotFoundSwagger,
  })
  async updateStatus(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateOrderDto,
  ) {
    return await this.updateOrdersService.execute(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete order' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: 204,
    description: 'Order removed successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
    type: NotFoundSwagger,
  })
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.deleteOrdersService.execute(id);
  }
}
