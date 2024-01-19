import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdUsersService } from './findbyid-users.service';

describe('FindbyidUsersService', () => {
  let service: FindByIdUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByIdUsersService],
    }).compile();

    service = module.get<FindByIdUsersService>(FindByIdUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
