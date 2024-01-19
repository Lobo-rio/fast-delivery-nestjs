import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv/config';

import { User } from '../../../infra/entities/users/user.entity';
import { Order } from '../../../infra/entities/orders/order.entity';
import { Recipient } from '../../../infra/entities/recipients/recipient.entity';

dotenv;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [User, Order, Recipient],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class PostgresModule {}
