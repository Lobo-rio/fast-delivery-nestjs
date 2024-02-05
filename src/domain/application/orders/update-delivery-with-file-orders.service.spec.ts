import { Test, TestingModule } from '@nestjs/testing';
import { UpdateDeliveryWithFileOrdersService } from './update-delivery-with-file-orders.service';

describe('UpdateDeliveryWithFileOrdersService', () => {
  let service: UpdateDeliveryWithFileOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateDeliveryWithFileOrdersService],
    }).compile();

    service = module.get<UpdateDeliveryWithFileOrdersService>(
      UpdateDeliveryWithFileOrdersService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
