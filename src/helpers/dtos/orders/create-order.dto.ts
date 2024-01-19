import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  numberOrder: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  deliveryManId: string;

  @ApiProperty()
  delivered?: boolean;

  @ApiProperty()
  returned?: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(40)
  status: string;
}
