import { Inject, Injectable } from '@nestjs/common';

import { RecipientsInterfaceRepository } from '../../../domain/enterprise/repositoreis/recipients/recipients-interface.recpository';
import { Recipient } from '../../../infra/entities/recipients/recipient.entity';

@Injectable()
export class FindManyRecipientsService {
  constructor(
    @Inject('RecipientsInterfaceRepository')
    private readonly recipientRepository: RecipientsInterfaceRepository,
  ) {}

  async execute(): Promise<Recipient[]> {
    return await this.recipientRepository.findMany();
  }
}
