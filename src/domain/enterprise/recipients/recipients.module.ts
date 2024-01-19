import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateRecipientsService } from '../../../domain/application/recipients/create-recipients.service';
import { UpdateRecipientsService } from '../../../domain/application/recipients/update-recipients.service';
import { DeleteRecipientsService } from '../../../domain/application/recipients/delete-recipients.service';
import { FindByIdRecipientsService } from '../../../domain/application/recipients/findbyid-recipients.service';

import { RecipientsController } from '../../../infra/controllers/recipients/recipients.controller';
import { Recipient } from '../../../infra/entities/recipients/recipient.entity';
import { RecipientRepository } from '../../../infra/repositoreis/recipients/recipients.repository';
import { FindManyRecipientsService } from '../../../domain/application/recipients/findmany-recipients.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recipient])],
  providers: [
    CreateRecipientsService,
    UpdateRecipientsService,
    DeleteRecipientsService,
    FindManyRecipientsService,
    FindByIdRecipientsService,
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
    FindManyRecipientsService,
    FindByIdRecipientsService,
  ],
})
export class RecipientsModule {}
