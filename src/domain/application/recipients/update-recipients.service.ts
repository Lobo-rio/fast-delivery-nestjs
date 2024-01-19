import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { Recipient } from '../../../infra/entities/recipients/recipient.entity';
import { RecipientsInterfaceRepository } from '../../enterprise/repositoreis/recipients/recipients-interface.recpository';
import { UpdateRecipientDto } from '../../../helpers/dtos/recipients/update-recipient.dto';

@Injectable()
export class UpdateRecipientsService {
  constructor(
    @Inject('RecipientsInterfaceRepository')
    private readonly recipientRepository: RecipientsInterfaceRepository,
  ) {}

  async execute(id: string, data: UpdateRecipientDto): Promise<Recipient> {
    const recipientExists = await this.recipientRepository.findById(id);
    if (!recipientExists) {
      throw new NotFoundException('Recipient is not registered!');
    }
    return await this.recipientRepository.update(id, data);
  }
}
