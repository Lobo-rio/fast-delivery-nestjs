import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('recipients')
export class Recipient {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  public id: string;

  @Column({ length: 80 })
  @ApiProperty()
  public name: string;

  @Column({ length: 120 })
  @ApiProperty()
  public address: string;

  @Column()
  @ApiProperty()
  public number: number;

  @Column({ length: 20 })
  @ApiProperty()
  public complement: string;

  @Column({ length: 60 })
  @ApiProperty()
  public neighborhood: string;

  @Column({ length: 60 })
  @ApiProperty()
  public city: string;

  @Column({ length: 2 })
  @ApiProperty()
  public state: string;

  @Column({ length: 40 })
  @ApiProperty()
  public country: string;

  @Column({ length: 8 })
  @ApiProperty()
  public cep: string;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  @ApiProperty()
  public deletedAt: Date;

  constructor(recipient?: Partial<Recipient>) {
    this.id = recipient?.id;
    this.name = recipient?.name;
    this.address = recipient?.address;
    this.number = recipient?.number;
    this.complement = recipient?.complement;
    this.neighborhood = recipient?.neighborhood;
    this.city = recipient?.city;
    this.state = recipient?.state;
    this.country = recipient?.country;
    this.cep = recipient?.cep;
    this.createdAt = recipient?.createdAt;
    this.updatedAt = recipient?.updatedAt;
    this.deletedAt = recipient?.deletedAt;
  }
}
