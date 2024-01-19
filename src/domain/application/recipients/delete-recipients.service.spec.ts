import { Test, TestingModule } from '@nestjs/testing';
import { DeleteRecipientsService } from './delete-recipients.service';

describe('DeleteRecipientsService', () => {
  let service: DeleteRecipientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteRecipientsService],
    }).compile();

    service = module.get<DeleteRecipientsService>(DeleteRecipientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
