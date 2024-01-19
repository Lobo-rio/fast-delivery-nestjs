import { UpdateRecipientDto } from '../../../../helpers/dtos/recipients/update-recipient.dto';
import { CreateRecipientDto } from '../../../../helpers/dtos/recipients/create-recipient.dto';
import { Recipient } from '../../../../infra/entities/recipients/recipient.entity';

export interface RecipientsInterfaceRepository {
  findById(id: string): Promise<Recipient>;
  findMany(): Promise<Recipient[]>;
  create(data: CreateRecipientDto): Promise<Recipient>;
  update(id: string, data: UpdateRecipientDto): Promise<Recipient>;
  softDelete(id: string): Promise<void>;
}
