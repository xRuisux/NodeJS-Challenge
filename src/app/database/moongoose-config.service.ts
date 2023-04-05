import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions,  MongooseOptionsFactory} from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {

  constructor(private readonly configService: ConfigService) {
    const databaseUri = this.configService.get('mongodb.uri');
  }

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: process.env.MONGODB_URI,
    };
  }
}