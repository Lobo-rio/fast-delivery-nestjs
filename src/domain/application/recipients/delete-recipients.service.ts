import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { RecipientsInterfaceRepository } from '../../enterprise/repositoreis/recipients/recipients-interface.recpository';

@Injectable()
export class DeleteRecipientsService {
  constructor(
    @Inject('RecipientsInterfaceRepository')
    private readonly recipientRepository: RecipientsInterfaceRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const recipientExists = await this.recipientRepository.findById(id);
    if (!recipientExists) {
      throw new NotFoundException('Recipient is not registered!');
    }
    return await this.recipientRepository.softDelete(id);
  }
}
