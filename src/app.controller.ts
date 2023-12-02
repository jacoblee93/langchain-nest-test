import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
const {
  OpenAI,
} = require("langchain/llms/openai");

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const model = new OpenAI({
      modelName: "gpt-3.5-turbo-instruct",
    });
    return model.invoke("How are you?");
    // return this.appService.getHello();
  }
}
