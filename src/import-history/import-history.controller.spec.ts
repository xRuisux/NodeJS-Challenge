import { Test, TestingModule } from '@nestjs/testing';
import { ImportHistoryController } from './import-history.controller';
import { ImportHistoryService } from './import-history.service';

describe('ImportHistoryController', () => {
  let controller: ImportHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImportHistoryController],
      providers: [ImportHistoryService],
    }).compile();

    controller = module.get<ImportHistoryController>(ImportHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
