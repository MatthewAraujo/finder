import { Controller, Get } from '@nestjs/common'

@Controller('/')
export class AuthenticateController {
  @Get()
  async handle() {
    return {
      hello: 'World',
    }
  }
}
