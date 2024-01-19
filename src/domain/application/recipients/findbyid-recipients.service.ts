import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { RecipientsInterfaceRepository } from '../../../domain/enterprise/repositoreis/recipients/recipients-interface.recpository';
import { Recipient } from '../../../infra/entities/recipients/recipient.entity';

@Injectable()
export class FindByIdRecipientsService {
  constructor(
    @Inject('RecipientsInterfaceRepository')
    private readonly recipientRepository: RecipientsInterfaceRepository,
  ) {}

  async execute(id: string): Promise<Recipient> {
    const recipient = await this.recipientRepository.findById(id);
    if (!recipient) throw new NotFoundException('Recipient is not registered!');

    return recipient;
  }
}
