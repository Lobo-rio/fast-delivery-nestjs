import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdRecipientsService } from './findbyid-recipients.service';

describe('FindbyidRecipientsService', () => {
  let service: FindByIdRecipientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByIdRecipientsService],
    }).compile();

    service = module.get<FindByIdRecipientsService>(FindByIdRecipientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
