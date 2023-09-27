import { Department, Prisma } from "@prisma/client";
import { QueryOutputDto } from "./template/query.output.dto";

export type CreateDepartmentInputDto = { displayName: string, description: string | null, isDisabled: boolean | null }
export type CreateDepartmentOutputDto = Department

// export type DepartmentQueryInputDto = { id: string }
export type DepartmentQueryOutputDto = QueryOutputDto<Department | null>

export type DepartmentUpdateInputDto = { displayName: string, description: string | null, isDisabled: boolean | null }
export type DepartmentUpdateOutputDto = Department

export type DepartmentQueryListInputDto = Prisma.DepartmentFindManyArgs
export type DepartmentQueryListOutputDto = Department[]

export type DepartmentDeleteOutputDto = { data: Department }