import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonIntegrationStatusEndpoint } from './person-integration-status/person-integration-status.endpoint';
import { PersonIntegrationStatusService } from './person-integration-status/person-integration-status.service';

@Module({
  imports: [],
  controllers: [AppController, PersonIntegrationStatusEndpoint],
  providers: [AppService, PersonIntegrationStatusService],
})
export class AppModule {}
