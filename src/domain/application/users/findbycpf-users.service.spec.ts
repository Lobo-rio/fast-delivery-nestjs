import { Test, TestingModule } from '@nestjs/testing';
import { FindByCpfUsersService } from './findbycpf-users.service';

describe('FindCpfUsersService', () => {
  let service: FindByCpfUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByCpfUsersService],
    }).compile();

    service = module.get<FindByCpfUsersService>(FindByCpfUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
