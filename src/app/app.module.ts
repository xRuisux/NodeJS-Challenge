import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ImportHistoryModule } from './import-history/import-history.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:IaLhmQ8nBHbPA3JN@clusterproductstest.s3vppb9.mongodb.net/?retryWrites=true&w=majority'), ProductsModule, ImportHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
