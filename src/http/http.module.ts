import { Module } from "@nestjs/common";

import { DatabaseModule } from "@/database/database.module";
import { AuthenticateController, } from "./controller/authenticate.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [
    AuthenticateController
  ],
  providers: [
    AuthenticateController
  ],
})
export class HttpModule { }