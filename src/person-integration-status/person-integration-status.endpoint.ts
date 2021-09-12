import {Controller, Get, Param} from '@nestjs/common';

@Controller('/onboarding-platform')
export class PersonIntegrationStatusEndpoint {

    @Get('/person-integration-status/:document')
    personIntegrationStatus(@Param('id') id: string) {
        return {
            bankingId: 845941,
            document: "09912169468",
            paymentId: 1540525,
            personId: "c8223805-b176-43fa-bee1-512f164f7605",
            status: "completed"
        }
    }

}