import { Test, TestingModule } from '@nestjs/testing';
import { FindManyOrdersService } from './findmany-orders.service';

describe('FindManyOrdersService', () => {
  let service: FindManyOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindManyOrdersService],
    }).compile();

    service = module.get<FindManyOrdersService>(FindManyOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
