import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  HttpCode,
  HttpStatus,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateOrdersService } from '../../../domain/application/orders/create-orders.service';
import { UpdateStatusOrdersService } from '../../../domain/application/orders/update-status-orders.service';
import { UpdateDeliveryWithFileOrdersService } from '../../../domain/application/orders/update-delivery-with-file-orders.service';
import { DeleteOrdersService } from '../../../domain/application/orders/delete-orders.service';
import { FindByIdOrdersService } from '../../../domain/application/orders/findbyid-orders.service';
import { FindManyOrdersService } from '../../../domain/application/orders/findmany-orders.service';

import { BadRequestSwagger } from '../../../helpers/swagger/errors/bad-request.swagger';
import { NotFoundSwagger } from '../../../helpers/swagger/errors/not-found.swagger';
import { CreateTodoSwagger } from '../../../helpers/swagger/interfaces/orders/create-todo.swagger';
import { UpdateTodoSwagger } from '../../../helpers/swagger/interfaces/orders/update-todo.swagger';
import { IndexTodoSwagger } from '../../../helpers/swagger/interfaces/orders/index-todo.swagger';

import { CreateOrderDto } from '../../../helpers/dtos/orders/create-order.dto';
import { UpdateOrderDto } from '../../../helpers/dtos/orders/update-order.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('app/v1/orders')
@ApiTags('Orders')
export class OrdersController {
  constructor(
    private readonly createOrdersService: CreateOrdersService,
    private readonly updateOrdersService: UpdateStatusOrdersService,
    private readonly deliveryUploadWithFileOrdersService: UpdateDeliveryWithFileOrdersService,
    private readonly deleteOrdersService: DeleteOrdersService,
    private readonly findByIdOrdersService: FindByIdOrdersService,
    private readonly findManyOrdersService: FindManyOrdersService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'List orders' })
  @ApiResponse({
    status: 200,
    description: 'List of orders returned successfully',
    type: IndexTodoSwagger,
    isArray: true,
  })
  async findMany() {
    return await this.findManyOrdersService.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List a single order' })
  @ApiResponse({
    status: 200,
    description: 'Returned single order successfully',
    type: IndexTodoSwagger,
    isArray: false,
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
  async findById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.findByIdOrdersService.execute(id);
  }

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
    description: 'Order not found',
    type: NotFoundSwagger,
  })
  async create(@Body() body: CreateOrderDto) {
    return await this.createOrdersService.execute(body);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Create order delivery with file' })
  @ApiResponse({
    status: 200,
    description: 'Returned single order delivery with file successfully',
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
    description: 'Order not found',
    type: NotFoundSwagger,
  })
  async deliveryUploadWithFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 2 }), //2mb
          new FileTypeValidator({ fileType: '.(jpeg|png|jpg)' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return await this.deliveryUploadWithFileOrdersService.execute(file);
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
