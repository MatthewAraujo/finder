import {
  Body,
  Controller,
  Get,
} from '@nestjs/common'


@Controller('/')
export class AuthenticateController {
  constructor() { }

  @Get()
  async handle() {
    return {
      hello: "World"
    }
  }
}