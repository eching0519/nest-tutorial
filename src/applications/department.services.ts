import { Injectable } from '@nestjs/common';
import { Department, Prisma } from '@prisma/client';
import { DepartmentCore } from 'src/cores/department.core';

@Injectable()
export class DepartmentService {
    public constructor(
        private readonly departmentCore: DepartmentCore
    ) { }

    public async getById(id: number): Promise<Department | null> {
        return this.departmentCore.getAsync({ where: { id: id } })
    }

    public async getList(
    ): Promise<Department[]> {
        return this.departmentCore.getListAsync({})
    }

    public async create(
        displayName: string
    ): Promise<Department> {
        return this.departmentCore.createAsync({ data: { displayName: displayName } })
    }

    public async delete(
        id: number
    ): Promise<Department | null> {
        return this.departmentCore.deleteAsync({ where: { id: id } });
    }
}