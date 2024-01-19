import { Test, TestingModule } from '@nestjs/testing';
import { FindManyUsersService } from './findmany-users.service';

describe('FindManyUsersService', () => {
  let service: FindManyUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindManyUsersService],
    }).compile();

    service = module.get<FindManyUsersService>(FindManyUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
