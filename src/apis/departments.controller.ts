import { Controller, Get, Param, Query } from '@nestjs/common';
import { query } from 'express';
import { DepartmentService } from 'src/applications/department.services';
import { DepartmentQueryInputDto, DepartmentQueryListOutputDto, DepartmentQueryOutputDto } from 'src/dto/department.dto';

@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) { }

    @Get(':id')
    public async get(
        @Param('id') id: string,
    ): Promise<DepartmentQueryOutputDto> {
        let idNum: number = parseInt(id)
        console.log(idNum)

        const data = await this.departmentService.getById(idNum)
        return { data: data } as DepartmentQueryOutputDto
    }

    @Get()
    public async list(): Promise<DepartmentQueryListOutputDto> {
        return this.departmentService.getList();
    }
}