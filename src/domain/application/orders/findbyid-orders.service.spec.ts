import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdOrdersService } from './findbyid-orders.service';

describe('FindbyidOrdersService', () => {
  let service: FindByIdOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByIdOrdersService],
    }).compile();

    service = module.get<FindByIdOrdersService>(FindByIdOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
