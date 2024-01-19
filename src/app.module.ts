import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './domain/enterprise/users/users.module';
import { PostgresModule } from './infra/database/postgres/postgres.module';
import { AuthModule } from './domain/enterprise/auth/auth.module';
import { OrdersModule } from './domain/enterprise/orders/orders.module';
import { RecipientsModule } from './domain/enterprise/recipients/recipients.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PostgresModule,
    AuthModule,
    OrdersModule,
    RecipientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
