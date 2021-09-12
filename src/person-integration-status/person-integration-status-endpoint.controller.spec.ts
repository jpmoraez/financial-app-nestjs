import { Test, TestingModule } from '@nestjs/testing';
import { PersonIntegrationStatusEndpoint } from './person-integration-status.endpoint';

describe('PersonIntegrationStatusEndpointController', () => {
  let controller: PersonIntegrationStatusEndpoint;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonIntegrationStatusEndpoint],
    }).compile();

    controller = module.get<PersonIntegrationStatusEndpoint>(PersonIntegrationStatusEndpoint);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
