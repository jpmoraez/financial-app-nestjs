import { Test, TestingModule } from '@nestjs/testing';
import { PersonIntegrationStatusService } from './person-integration-status.service';

describe('PersonIntegrationStatusEndpointService', () => {
  let service: PersonIntegrationStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonIntegrationStatusService],
    }).compile();

    service = module.get<PersonIntegrationStatusService>(PersonIntegrationStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
