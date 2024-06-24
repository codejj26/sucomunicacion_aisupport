import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { addMessageUseCase, checkCompletionUseCase, createRunUseCase, createThreadUseCase, listMessagesUseCase } from './use-cases';
import { QuestionDto } from './dtos';

@Injectable()
export class AssistantService {

    private openai: OpenAI;

    constructor() {        
        this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    }

    async createThread() {
        //todo: validar que usuario tenga email sucomunicacion y tenga consultas disponibles
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
