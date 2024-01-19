import { Test, TestingModule } from '@nestjs/testing';
import { DeleteUsersService } from './delete-users.service';

describe('DeleteUsersService', () => {
  let service: DeleteUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteUsersService],
    }).compile();

    service = module.get<DeleteUsersService>(DeleteUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
