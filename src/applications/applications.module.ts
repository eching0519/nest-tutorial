import { Module } from '@nestjs/common';
import { DepartmentService } from './department.services';
import { CoreModule } from 'src/cores';

@Module({
    imports: [CoreModule],
    providers: [DepartmentService],
    exports: [DepartmentService],
})
export class ApplicationModule { };