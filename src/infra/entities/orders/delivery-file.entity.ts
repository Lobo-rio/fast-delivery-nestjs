import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('delivery_file')
export class DeliveryFile {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  public id: string;

  @Column({ name: 'order_id' })
  @ApiProperty()
  public orderId: string;

  @Column({ name: 'file_name' })
  @ApiProperty()
  public fileName: string;

  @Column()
  @ApiProperty()
  public url: string;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  @ApiProperty()
  public deletedAt: Date;

  constructor(deliveryFile?: Partial<DeliveryFile>) {
    this.id = deliveryFile?.id;
    this.orderId = deliveryFile?.orderId;
    this.fileName = deliveryFile?.fileName;
    this.url = deliveryFile?.url;
    this.createdAt = deliveryFile?.createdAt;
    this.updatedAt = deliveryFile?.updatedAt;
    this.deletedAt = deliveryFile?.deletedAt;
  }
}
