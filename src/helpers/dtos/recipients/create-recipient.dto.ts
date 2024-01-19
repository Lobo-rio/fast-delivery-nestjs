import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

export class CreateRecipientDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(80)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(120)
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  complement: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(60)
  neighborhood: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(60)
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(2)
  state: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(40)
  country: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(8)
  cep: string;
}
