import { Body, Controller, Post } from '@nestjs/common';
import { AssistantService } from './assistant.service';
import { QuestionDto } from './dtos';

@Controller('assistant')
export class AssistantController {
  constructor(private readonly assistantService: AssistantService) { }

  @Post('threads')
  async createThread() {
    return this.assistantService.createThread();
  }

  @Post('messages')
  async userQuestion(@Body() questionDto: QuestionDto) {
    return this.assistantService.userQuestion(questionDto);
  }

}
