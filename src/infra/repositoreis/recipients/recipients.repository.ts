import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RecipientsInterfaceRepository } from '../../../domain/enterprise/repositoreis/recipients/recipients-interface.recpository';
import { Recipient } from '../../../infra/entities/recipients/recipient.entity';

import { CreateRecipientDto } from '../../../helpers/dtos/recipients/create-recipient.dto';
import { UpdateRecipientDto } from '../../../helpers/dtos/recipients/update-recipient.dto';

@Injectable()
export class RecipientRepository implements RecipientsInterfaceRepository {
  constructor(
    @InjectRepository(Recipient)
    private readonly recipientRepository: Repository<Recipient>,
  ) {}

  async findById(id: string): Promise<Recipient> {
    try {
      return await this.recipientRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findMany(): Promise<Recipient[]> {
    try {
      return await this.recipientRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(data: CreateRecipientDto): Promise<Recipient> {
    try {
      return await this.recipientRepository.save(
        this.recipientRepository.create(data),
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, data: UpdateRecipientDto): Promise<Recipient> {
    try {
      const recipient = await this.findById(id);
      this.recipientRepository.merge(recipient, data);
      return await this.recipientRepository.save(recipient);
    } catch (error) {
      throw new Error(error);
    }
  }

  async softDelete(id: string): Promise<void> {
    try {
      await this.recipientRepository.softDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
