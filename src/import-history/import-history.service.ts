import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ImportHistory } from './interface/import-history.interface';

@Injectable()
export class ImportHistoryService {
  constructor(
    @InjectModel('ImportHistory') private importHistoryModel: Model<ImportHistory>,
  ) {}

  async create(importHistory: ImportHistory): Promise<ImportHistory> {
    const createImportHistory = new this.importHistoryModel(importHistory);
    return await createImportHistory.save();
  }

  async findLastRun() {
    return await this.importHistoryModel.find().sort({$natural:-1});;
  }
}
