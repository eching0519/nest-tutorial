import { Module, Global } from '@nestjs/common';
import { HealthController } from './health.controller';
import { DepartmentController } from './departments.controller';
import { ApplicationModule } from 'src/applications';

@Global()
@Module({
    imports: [ApplicationModule],
    controllers: [HealthController, DepartmentController],
    providers: [],
})
export class ApiModule { };