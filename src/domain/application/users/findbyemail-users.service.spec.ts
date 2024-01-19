import { Test, TestingModule } from '@nestjs/testing';
import { FindByEmailUsersService } from './findbyemail-users.service';

describe('FindemailUsersService', () => {
  let service: FindByEmailUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByEmailUsersService],
    }).compile();

    service = module.get<FindByEmailUsersService>(FindByEmailUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
