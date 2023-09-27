import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import CreateParkDTO from './dto/CreatePark.dto';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'hello';
  }

  @Post('parks')
  @HttpCode(204)
  async createPark(
    @Body() parkData: CreateParkDTO,
  ) /*: Promise<{ uuid: string; createdAt: Date }>*/ {
    console.log(parkData);
    const data = {
      ...parkData,
      uuid: uuidv4(),
      createdAt: new Date(),
    };
    console.log(data);
  }
}
