import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateRecipientsService } from '../../../domain/application/recipients/create-recipients.service';
import { UpdateRecipientsService } from '../../../domain/application/recipients/update-recipients.service';
import { DeleteRecipientsService } from '../../../domain/application/recipients/delete-recipients.service';

import { RecipientsController } from '../../../infra/controllers/recipients/recipients.controller';
import { Recipient } from '../../../infra/entities/recipients/recipient.entity';
import { RecipientRepository } from '../../../infra/repositoreis/recipients/recipients.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Recipient])],
  providers: [
    CreateRecipientsService,
    UpdateRecipientsService,
    DeleteRecipientsService,
    {
      provide: 'RecipientsInterfaceRepository',
      useClass: RecipientRepository,
    },
  ],
  controllers: [RecipientsController],
  exports: [
    CreateRecipientsService,
    UpdateRecipientsService,
    DeleteRecipientsService,
  ],
})
export class RecipientsModule {}
