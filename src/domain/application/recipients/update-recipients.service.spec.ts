import { Test, TestingModule } from '@nestjs/testing';
import { UpdateRecipientsService } from './update-recipients.service';

describe('UpdateRecipientsService', () => {
  let service: UpdateRecipientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateRecipientsService],
    }).compile();

    service = module.get<UpdateRecipientsService>(UpdateRecipientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
