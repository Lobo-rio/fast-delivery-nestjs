import { Test, TestingModule } from '@nestjs/testing';
import { FindManyRecipientsService } from './findmany-recipients.service';

describe('FindManyRecipientsService', () => {
  let service: FindManyRecipientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindManyRecipientsService],
    }).compile();

    service = module.get<FindManyRecipientsService>(FindManyRecipientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
