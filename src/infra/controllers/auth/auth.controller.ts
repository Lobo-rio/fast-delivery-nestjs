import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoginDeliveryManDto } from '../../../helpers/dtos/auth/login-deliveryman.dto';
import { BadRequestSwagger } from '../../../helpers/swagger/errors/bad-request.swagger';
import { NotFoundSwagger } from '../../../helpers/swagger/errors/not-found.swagger';
import { LoginDeliveryManSwagger } from '../../../helpers/swagger/interfaces/auth/login-deliveryman.swagger';
import { LoginDeliveryManService } from '../../../domain/application/auth/login-deliveryman.service';

@Controller('app/v1/auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private loginDeliveryManService: LoginDeliveryManService) {}

  @Post()
  @ApiOperation({ summary: 'List a single user' })
  @ApiResponse({
    status: 200,
    description: 'Returned single user successfully',
    type: LoginDeliveryManSwagger,
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
  async loginDeliveryMan(@Body() body: LoginDeliveryManDto) {
    return await this.loginDeliveryManService.execute(body);
  }
}
