import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products.service';
import { ProductsSchema } from './schemas/products';
import { ProductsController } from './products.controller';
import { ImportHistoryService } from '../import-history/import-history.service';
import { ImportHistorySchema } from '../import-history/schemas/import-history';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Products', schema: ProductsSchema}]),
    MongooseModule.forFeature([{name: 'ImportHistory', schema: ImportHistorySchema}])
  ],
  providers: [ProductsService, ImportHistoryService],
  controllers: [ProductsController]
})
export class ProductsModule {}
