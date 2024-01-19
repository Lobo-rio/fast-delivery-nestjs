import { Test, TestingModule } from '@nestjs/testing';
import { DeleteOrdersService } from './delete-orders.service';

describe('DeleteOrdersService', () => {
  let service: DeleteOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteOrdersService],
    }).compile();

    service = module.get<DeleteOrdersService>(DeleteOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
