import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { BadRequestSwagger } from '../../../helpers/swagger/errors/bad-request.swagger';
import { NotFoundSwagger } from '../../../helpers/swagger/errors/not-found.swagger';
import { CreateTodoSwagger } from '../../../helpers/swagger/interfaces/users/create-todo.swagger';
import { UpdateTodoSwagger } from '../../../helpers/swagger/interfaces/recipients/update-todo.swagger';
import { IndexTodoSwagger } from '../../../helpers/swagger/interfaces/recipients/index-todo.swagger';

import { CreateRecipientsService } from '../../../domain/application/recipients/create-recipients.service';
import { UpdateRecipientsService } from '../../../domain/application/recipients/update-recipients.service';
import { DeleteRecipientsService } from '../../../domain/application/recipients/delete-recipients.service';
import { FindManyRecipientsService } from '../../../domain/application/recipients/findmany-recipients.service';
import { FindByIdRecipientsService } from '../../../domain/application/recipients/findbyid-recipients.service';

import { CreateRecipientDto } from '../../../helpers/dtos/recipients/create-recipient.dto';
import { UpdateRecipientDto } from '../../../helpers/dtos/recipients/update-recipient.dto';

@Controller('app/v1/recipients')
@ApiTags('Recipients')
export class RecipientsController {
  constructor(
    private readonly createRecipientsService: CreateRecipientsService,
    private readonly updateRecipientsService: UpdateRecipientsService,
    private readonly deleteRecipientsService: DeleteRecipientsService,
    private readonly findManyRecipientsService: FindManyRecipientsService,
    private readonly findByIdRecipientsService: FindByIdRecipientsService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'List recipients' })
  @ApiResponse({
    status: 200,
    description: 'List of recipients returned successfully',
    type: IndexTodoSwagger,
    isArray: true,
  })
  async findMany() {
    return await this.findManyRecipientsService.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List a single recipient' })
  @ApiResponse({
    status: 200,
    description: 'Returned single recipient successfully',
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
    description: 'Recipient not found',
    type: NotFoundSwagger,
  })
  async findById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.findByIdRecipientsService.execute(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create recipients' })
  @ApiResponse({
    status: 200,
    description: 'Returned single recipient successfully',
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
  async create(@Body() body: CreateRecipientDto) {
    return await this.createRecipientsService.execute(body);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update recipient' })
  @ApiResponse({
    status: 200,
    description: 'Recipient updated successfully',
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
    @Body() body: UpdateRecipientDto,
  ) {
    return await this.updateRecipientsService.execute(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete recipient' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: 204,
    description: 'Recipient removed successfully',
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
    return await this.deleteRecipientsService.execute(id);
  }
}
