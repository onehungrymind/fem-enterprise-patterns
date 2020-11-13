import { Action, Message } from '@fem/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('action')
  getAction(): Action {
    return this.appService.getAction();
  }

  @Get('actions')
  getActions(): Action[] {
    return this.appService.getActions();
  }
}
