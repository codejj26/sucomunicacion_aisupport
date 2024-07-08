import { BadRequestException, Body, Controller, Post } from '@nestjs/common';

import { AssistantService } from './assistant.service';
import { QuestionDto } from './dtos';
import { EmailDomain } from './decorators/email-domain.decorator';

@Controller('assistant')
export class AssistantController {
  constructor(private readonly assistantService: AssistantService) { }

  @Post('threads')
  async createThread(@Body('userEmail') userEmail: string) {
    if (!userEmail) {
      throw new BadRequestException('userEmail is required');
    }
    return this.assistantService.createThread(userEmail);
  }
  @Post('messages')
  async userQuestion(@Body() questionDto: QuestionDto) {    
    if (!questionDto.threadId) {
      throw new BadRequestException('threadId is required');
    }
    return this.assistantService.userQuestion(questionDto);
  }
  
  @Post('dummy')
  async dummy(@EmailDomain() userEMail: string, @Body() questionDto: QuestionDto) {
    return {
      ...questionDto,
      userEMail,
    }
  }

}
