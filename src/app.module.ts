import { Module } from '@nestjs/common';
import { AssistantModule } from './assistant/assistant.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AssistantModule,
    ConfigModule.forRoot({isGlobal: true}),
  ],
})
export class AppModule { }
