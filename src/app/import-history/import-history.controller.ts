import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImportHistoryService } from './import-history.service';
import { ImportHistory } from './interface/import-history.interface';

@Controller('import-history')
export class ImportHistoryController {
  constructor(private readonly importHistoryService: ImportHistoryService) {}

  @Post()
  async create(@Body() importHitory: ImportHistory): Promise<ImportHistory> {
    return this.importHistoryService.create(importHitory);
  }

  @Get()
  findLastRun() {
    return this.importHistoryService.findLastRun();
  }
}
