import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(80)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @MinLength(5)
  @MaxLength(120)
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @MinLength(11)
  @MaxLength(11)
  @ApiProperty()
  cpf: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  @ApiProperty()
  roles: string;

  @IsNotEmpty()
  @ApiProperty()
  isActive: boolean;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
