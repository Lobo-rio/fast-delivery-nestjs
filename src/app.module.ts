import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './domain/enterprise/users/users.module';
import { PostgresModule } from './infra/database/postgres/postgres.module';
import { AuthModule } from './domain/enterprise/auth/auth.module';
import { OrdersModule } from './domain/enterprise/orders/orders.module';
import { RecipientsModule } from './domain/enterprise/recipients/recipients.module';
import { NodeMailerModule } from './core/nodemailer/nodemailer.module';
import { MulterUploadModule } from './core/multer/multer-upload.module';
import { EnvModule } from './helpers/env/env.module';
import { envSchema } from './helpers/env/env';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    UsersModule,
    PostgresModule,
    AuthModule,
    OrdersModule,
    RecipientsModule,
    MulterUploadModule,
    EnvModule,
    NodeMailerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
