import { Test, TestingModule } from '@nestjs/testing';
import { CreateRecipientsService } from './create-recipients.service';

describe('CreateRecipientsService', () => {
  let service: CreateRecipientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateRecipientsService],
    }).compile();

    service = module.get<CreateRecipientsService>(CreateRecipientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
