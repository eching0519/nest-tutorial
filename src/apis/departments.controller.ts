import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { DepartmentService } from 'src/applications/department.services';
import { CreateDepartmentInputDto, DepartmentDeleteOutputDto, DepartmentQueryListOutputDto, DepartmentQueryOutputDto, DepartmentUpdateInputDto, DepartmentUpdateOutputDto } from 'src/dto/department.dto';

@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) { }

    @Get(':id')
    public async get(
        @Param('id') id: string,
    ): Promise<DepartmentQueryOutputDto> {
        let idNum: number = parseInt(id)

        const data = await this.departmentService.getById(idNum)
        return { data: data } as DepartmentQueryOutputDto
    }

    @Get('')
    public async list(): Promise<DepartmentQueryListOutputDto> {
        return this.departmentService.getList();
    }

    @Post('create')
    public async create(
        @Body() departmentData: CreateDepartmentInputDto
    ) {
        return this.departmentService.create(departmentData);
    }

    @Patch('update/:id')
    public async update(
        @Param('id') id: string,
        @Body() departmentData: DepartmentUpdateInputDto
    ): Promise<DepartmentUpdateOutputDto> {
        let idNum: number = parseInt(id)
        console.log(idNum)

        return this.departmentService.update(idNum, departmentData)
    }

    @Delete('delete/:id')
    public async delete(
        @Param('id') id: string,
    ): Promise<DepartmentDeleteOutputDto> {
        let idNum: number = parseInt(id)
        const data = await this.departmentService.delete(idNum)

        return { data: data } as DepartmentDeleteOutputDto
    }
}