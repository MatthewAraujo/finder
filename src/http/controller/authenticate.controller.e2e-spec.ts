import { AppModule } from "@/app.module"
import { DatabaseModule } from "@/database/database.module"
import { Test } from "@nestjs/testing"
import { INestApplication } from "@nestjs/common"
import request from 'supertest'

describe('Authenticate (E2E)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [],
    }).compile()

    app = moduleRef.createNestApplication()


    await app.init()
  })

  test('[POST] /', async () => {

    const response = await request(app.getHttpServer()).get('/').send()
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      hello: "World"
    })
  })
})