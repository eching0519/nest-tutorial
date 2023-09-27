import { Module } from '@nestjs/common'
import { BasePrismaService, PrismaService } from './prisma.infrastructures'
import { REQUEST } from '@nestjs/core'

export const PRISMA_INJECTION_TOKEN = 'PrismaService'

@Module({
  controllers: [],
  providers: [
    {
      provide: PRISMA_INJECTION_TOKEN,
      inject: [REQUEST],
      useFactory(): PrismaService {
        return new BasePrismaService().withExtensions()
      },
    },
  ],
  exports: [PRISMA_INJECTION_TOKEN],
})
export class InfrastructuresModule {}
