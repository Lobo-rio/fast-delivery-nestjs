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

import { CreateUsersService } from '../../../domain/application/users/create-users.service';
import { DeleteUsersService } from '../../../domain/application/users/delete-users.service';
import { FindByCpfUsersService } from '../../../domain/application/users/findbycpf-users.service';
import { FindByEmailUsersService } from '../../../domain/application/users/findbyemail-users.service';
import { FindByIdUsersService } from '../../../domain/application/users/findbyid-users.service';
import { FindManyUsersService } from '../../../domain/application/users/findmany-users.service';
import { UpdateUsersService } from '../../../domain/application/users/update-users.service';

import { IndexTodoSwagger } from '../../../helpers/swagger/interfaces/users/index-todo.swagger';
import { CreateTodoSwagger } from '../../../helpers/swagger/interfaces/users/create-todo.swagger';
import { UpdateTodoSwagger } from '../../../helpers/swagger/interfaces/users/update-todo.swagger';

import { NotFoundSwagger } from '../../../helpers/swagger/errors/not-found.swagger';
import { BadRequestSwagger } from '../../../helpers/swagger/errors/bad-request.swagger';
import { ConflictExceptionSwagger } from '../../../helpers/swagger/errors/conflict-exception.swagger';

import { CreateUserDto } from '../../../helpers/dtos/users/create-user.dto';
import { UpdateUserDto } from '../../../helpers/dtos/users/update-user.dto';

@Controller('app/v1/users')
@ApiTags('Users')
export class UsersController {
  constructor(
    private createUsersService: CreateUsersService,
    private updateUsersService: UpdateUsersService,
    private deleteUsersService: DeleteUsersService,
    private findByIdUsersService: FindByIdUsersService,
    private findByCpfUsersService: FindByCpfUsersService,
    private findByEmailUsersService: FindByEmailUsersService,
    private findManyUsersService: FindManyUsersService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'List users' })
  @ApiResponse({
    status: 200,
    description: 'List of users returned successfully',
    type: IndexTodoSwagger,
    isArray: true,
  })
  async findMany() {
    return await this.findManyUsersService.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List a single users' })
  @ApiResponse({
    status: 200,
    description: 'Returned single user successfully',
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
    description: 'User not found',
    type: NotFoundSwagger,
  })
  async findById(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.findByIdUsersService.execute(id);
  }

  @Get('byCpf/:cpf')
  @ApiOperation({ summary: 'List a single user' })
  @ApiResponse({
    status: 200,
    description: 'Returned single user successfully',
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
    description: 'User not found',
    type: NotFoundSwagger,
  })
  async findByCpf(@Param('cpf') cpf: string) {
    return await this.findByCpfUsersService.execute(cpf);
  }

  @Get('byEmail/:email')
  @ApiOperation({ summary: 'List a single user' })
  @ApiResponse({
    status: 200,
    description: 'Returned single user successfully',
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
    description: 'User not found',
    type: NotFoundSwagger,
  })
  async findByEmail(@Param('email') email: string) {
    return await this.findByEmailUsersService.execute(email);
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'New user successfully created',
    type: CreateTodoSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 409,
    description: 'ConflictException',
    type: ConflictExceptionSwagger,
  })
  async create(@Body() body: CreateUserDto) {
    return await this.createUsersService.execute(body);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
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
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateUserDto,
  ) {
    return await this.updateUsersService.execute(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: 204,
    description: 'User removed successfully',
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
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.deleteUsersService.execute(id);
  }
}
