import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import OpenAI from 'openai';
import { addMessageUseCase, checkCompletionUseCase, createRunUseCase, createThreadUseCase, listMessagesUseCase } from './use-cases';
import { QuestionDto } from './dtos';
import { isValidEmail } from './decorators/correos';

@Injectable()
export class AssistantService {

    private openai: OpenAI;
    private assistantId: string;

    constructor() {        
        this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        this.assistantId = process.env.ASSISTANT_ID; 
    }

    async createThread(userEmail: string) {
        if (!isValidEmail(userEmail)) {
          throw new HttpException('El usuario no tiene un email válido de sucomunicacion.', HttpStatus.UNAUTHORIZED);
        }
        return await createThreadUseCase(this.openai);
      }
    async userQuestion(dto: QuestionDto) {        
        const { threadId, question } = dto;
        await addMessageUseCase(this.openai, { threadId, question });
        const run = await createRunUseCase(this.openai, { threadId })
        await checkCompletionUseCase(this.openai, { threadId, runId: run.id });
        return await listMessagesUseCase(this.openai, { threadId });
    }
}
