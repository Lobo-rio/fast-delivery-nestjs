import { Test, TestingModule } from '@nestjs/testing';
import { LoginDeliveryManService } from './login-deliveryman.service';

describe('LoginDeliveryManService', () => {
  let service: LoginDeliveryManService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginDeliveryManService],
    }).compile();

    service = module.get<LoginDeliveryManService>(LoginDeliveryManService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
