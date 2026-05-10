import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('api/hello')
  getHello(): string {
    return 'Hello from NestJS 🚀';
  }
}
