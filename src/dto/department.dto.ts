import { Department, Prisma } from "@prisma/client";
import { QueryOutputDto } from "./template/query.output.dto";

export type CreateDepartmentInputDto = Prisma.DepartmentCreateArgs
export type CreateDepartmentOutputDto = Department

export type DepartmentQueryInputDto = Prisma.DepartmentFindUniqueArgs
export type DepartmentQueryOutputDto = QueryOutputDto<Department | null>

export type DepartmentUpdateInputDto = Prisma.DepartmentUpdateArgs
export type DepartmentUpdateOutputDto = Department

export type DepartmentQueryListInputDto = Prisma.DepartmentFindManyArgs
export type DepartmentQueryListOutputDto = Department[]