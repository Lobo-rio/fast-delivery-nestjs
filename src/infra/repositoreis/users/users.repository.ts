import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersInterfaceRepository } from '../../../domain/enterprise/repositoreis/users/users-interface.repository';
import { User } from '../../../infra/entities/users/user.entity';
import { CreateUserDto } from '../../../helpers/dtos/users/create-user.dto';
import { UpdateUserDto } from '../../../helpers/dtos/users/update-user.dto';

@Injectable()
export class UserRepository implements UsersInterfaceRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findMany(): Promise<User[]> {
    try {
      return await this.userRepository.find({
        select: [
          'id',
          'name',
          'email',
          'roles',
          'createdAt',
          'updatedAt',
          'deletedAt',
        ],
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: string): Promise<User> {
    try {
      return await this.userRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByCpf(cpf: string): Promise<User> {
    try {
      return await this.userRepository.findOne({ where: { cpf } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      return await this.userRepository.findOne({ where: { email } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(data: CreateUserDto): Promise<User> {
    try {
      return await this.userRepository.save(this.userRepository.create(data));
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      this.userRepository.merge(user, data);
      return await this.userRepository.save(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  async softDelete(id: string): Promise<void> {
    try {
      await this.userRepository.softDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
