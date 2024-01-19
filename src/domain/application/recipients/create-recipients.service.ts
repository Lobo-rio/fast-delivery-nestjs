import { Inject, Injectable } from '@nestjs/common';

import { CreateRecipientDto } from '../../../helpers/dtos/recipients/create-recipient.dto';
import { Recipient } from '../../../infra/entities/recipients/recipient.entity';
import { RecipientsInterfaceRepository } from '../../../domain/enterprise/repositoreis/recipients/recipients-interface.recpository';

@Injectable()
export class CreateRecipientsService {
  constructor(
    @Inject('RecipientsInterfaceRepository')
    private readonly recipientRepository: RecipientsInterfaceRepository,
  ) {}

  async execute(data: CreateRecipientDto): Promise<Recipient> {
    return await this.recipientRepository.create(data);
  }
}
