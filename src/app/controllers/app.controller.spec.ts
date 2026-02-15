import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService, APP_REPOSITORY_TOKEN } from '../services/app.service';
import { AppRepository } from '../repositories/app.repository';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: APP_REPOSITORY_TOKEN,
          useValue: {
            getGreeting: () => 'Hello World!',
          } satisfies AppRepository,
        },
      ],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
  });

  it('should return "Hello World!"', () => {
    expect(appController.getHello()).toBe('Hello World!');
  });
});

