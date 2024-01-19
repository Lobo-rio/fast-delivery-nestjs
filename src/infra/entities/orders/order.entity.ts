import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  public id: string;

  @Column({ length: 20, unique: true })
  @ApiProperty()
  public numberOrder: string;

  @Column({ name: 'recipient_id' })
  @ApiProperty()
  public recipientId: string;

  @Column({ name: 'delivery_man_id' })
  @ApiProperty()
  public deliveryManId: string;

  @Column({ default: false })
  @ApiProperty()
  public delivered: boolean;

  @Column({ default: false })
  @ApiProperty()
  public returned: boolean;

  @Column({ length: 40 })
  @ApiProperty()
  public status: string;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  @ApiProperty()
  public deletedAt: Date;

  constructor(order?: Partial<Order>) {
    this.id = order?.id;
    this.numberOrder = order?.numberOrder;
    this.recipientId = order?.recipientId;
    this.deliveryManId = order?.deliveryManId;
    this.delivered = order?.delivered;
    this.returned = order?.returned;
    this.status = order?.status;
    this.createdAt = order?.createdAt;
    this.updatedAt = order?.updatedAt;
    this.deletedAt = order?.deletedAt;
  }
}
