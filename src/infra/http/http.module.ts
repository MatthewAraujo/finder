import { Module } from '@nestjs/common'

import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { DatabaseModule } from '../database/database.module'
import { RegisterStudentUseCase } from '@/domain/finder/application/use-cases/register-student'
import { AuthenticateStudentUseCase } from '@/domain/finder/application/use-cases/authenticate-student'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { StorageModule } from '../storage/storage.module'

@Module({
  imports: [DatabaseModule, CryptographyModule, StorageModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
  ],
  providers: [
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
  ],
})
export class HttpModule { }
