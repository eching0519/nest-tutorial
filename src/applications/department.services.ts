import { Injectable } from '@nestjs/common';
import { Department, Prisma } from '@prisma/client';
import { DepartmentCore } from 'src/cores/department.core';
import { CreateDepartmentInputDto, DepartmentUpdateInputDto } from 'src/dto/department.dto';

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
        departmentData: CreateDepartmentInputDto
    ): Promise<Department> {
        return this.departmentCore.createAsync({
            data: {
                ...departmentData
            }
        })
    }

    public async delete(
        id: number
    ): Promise<Department | null> {
        return this.departmentCore.deleteAsync({ where: { id: id } });
    }

    public async update(
        id: number,
        departmentData: DepartmentUpdateInputDto,
    ): Promise<Department> {
        return this.departmentCore.updateAsync({
            where: { id: id },
            data: departmentData
        })
    }
}