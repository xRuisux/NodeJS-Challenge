import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { ImportHistoryModule } from './import-history/import-history.module';
import app  from '../config/app'
import database from '../config/database'
import { MongooseConfigService } from './database/moongoose-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [app, database]
    }),
    MongooseModule.forRootAsync({useClass: MongooseConfigService}),
     ProductsModule,
      ImportHistoryModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
