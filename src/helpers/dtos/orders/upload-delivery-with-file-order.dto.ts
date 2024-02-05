import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateDeliveryWithFileOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  orderId: string;

  @ApiProperty()
  withdrawal?: boolean;

  @ApiProperty()
  delivered?: boolean;

  @ApiProperty()
  returned?: boolean;

  @ApiProperty()
  @IsNotEmpty()
  status: string;
}
