import { Module } from '@nestjs/common';
import { ApiModule } from './apis/apis.module';

@Module({
  imports: [ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
