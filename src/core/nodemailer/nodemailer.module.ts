import { Module } from '@nestjs/common';

import { NodeMailerService } from './nodemailer.service';
import { EnvModule } from '../../helpers/env/env.module';

@Module({
  imports: [EnvModule],
  controllers: [],
  providers: [NodeMailerService],
  exports: [NodeMailerService],
})
export class NodeMailerModule {}
