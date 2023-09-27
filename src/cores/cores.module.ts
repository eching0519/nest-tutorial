import { Module } from '@nestjs/common';
import { DepartmentCore } from './department.core';
import { InfrastructuresModule } from 'src/infrastructures';

@Module({
    imports: [InfrastructuresModule],
    providers: [DepartmentCore],
    exports: [DepartmentCore],
})
export class CoreModule { };