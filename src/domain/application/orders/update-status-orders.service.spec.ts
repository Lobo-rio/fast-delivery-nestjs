import { Test, TestingModule } from '@nestjs/testing';
import { UpdateStatusOrdersService } from './update-status-orders.service';

describe('UpdateStatusOrdersService', () => {
  let service: UpdateStatusOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateStatusOrdersService],
    }).compile();

    service = module.get<UpdateStatusOrdersService>(UpdateStatusOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
