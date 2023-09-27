import { Inject } from "@nestjs/common";
import { Department, Prisma } from "@prisma/client";
import { PRISMA_INJECTION_TOKEN } from "src/infrastructures";
import { PrismaService } from "src/infrastructures/prisma.infrastructures";

export class DepartmentCore {
    public constructor(
        @Inject(PRISMA_INJECTION_TOKEN) private prisma: PrismaService,
    ) { }

    public async getAsync(
        params: Prisma.DepartmentFindUniqueArgs,
    ): Promise<Department | null> {
        return this.prisma.department.findUnique(params)
    }

    public async getListAsync(
        params: Prisma.DepartmentFindManyArgs,
    ): Promise<Department[]> {
        return this.prisma.department.findMany(params)
    }

    public async createAsync(
        params: Prisma.DepartmentCreateArgs,
    ): Promise<Department> {
        return this.prisma.department.create(params)
    }

    public async deleteAsync(
        params: Prisma.DepartmentDeleteArgs,
    ): Promise<Department | null> {
        return this.prisma.department.delete(params);
    }

    public async updateAsync(
        params: Prisma.DepartmentUpdateArgs,
    ): Promise<Department | null> {
        return this.prisma.department.update(params)
    }
}