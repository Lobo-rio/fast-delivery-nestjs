import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateDeliveryOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  orderId: string;

  @ApiProperty()
  @IsNotEmpty()
  fileName: string;

  @ApiProperty()
  @IsNotEmpty()
  url: string;
}
