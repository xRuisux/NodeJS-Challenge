import { Module } from '@nestjs/common';
import { ImportHistoryService } from './import-history.service';
import { ImportHistoryController } from './import-history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ImportHistorySchema } from './schemas/import-history';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'ImportHistory', schema: ImportHistorySchema}])
  ],
  controllers: [ImportHistoryController],
  providers: [ImportHistoryService]
})
export class ImportHistoryModule {}
