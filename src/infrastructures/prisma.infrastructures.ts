import { Injectable, Scope } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

export type PrismaService = ReturnType<BasePrismaService['withExtensions']>

@Injectable({ scope: Scope.REQUEST })
export class BasePrismaService extends PrismaClient {
  public constructor() {
    super()
  }

  public withExtensions() {
    return this.$extends({
      name: 'refresh',
      query: {
        $allModels: {
          create: async ({ args, query }) => {
            return query(args)
          },
        },
      },
    })
  }
}
