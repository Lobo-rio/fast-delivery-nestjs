import { Test, TestingModule } from '@nestjs/testing';

import { NodeMailerService } from './nodemailer.service';

describe('NodeMailerService', () => {
  let service: NodeMailerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NodeMailerService],
    }).compile();

    service = module.get<NodeMailerService>(NodeMailerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
