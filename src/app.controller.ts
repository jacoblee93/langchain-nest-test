import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
const {
  OpenAI,
  OpenAIChat
} = require("langchain/llms/openai");

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const model = new OpenAI();
    return this.appService.getHello();
  }
}
