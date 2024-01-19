import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import {
  BeforeInsert,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  public id: string;

  @Column({ length: 80 })
  @ApiProperty()
  public name: string;

  @Column({ length: 11, unique: true })
  @ApiProperty()
  public cpf: string;

  @Column({ length: 120, unique: true })
  @ApiProperty()
  public email: string;

  @Column({ length: 20 })
  @ApiProperty()
  public roles: string;

  @Column({ default: true })
  @ApiProperty()
  public isActive: boolean;

  @Column()
  @ApiProperty()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  @ApiProperty()
  public deletedAt: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  constructor(user?: Partial<User>) {
    this.id = user?.id;
    this.name = user?.name;
    this.cpf = user?.cpf;
    this.email = user?.email;
    this.roles = user?.roles;
    this.password = user?.password;
    this.createdAt = user?.createdAt;
    this.updatedAt = user?.updatedAt;
    this.deletedAt = user?.deletedAt;
  }
}
