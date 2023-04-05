import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PRODUCT_STATUS } from './constants/products.constants';
import * as fs from 'fs';
import * as readline from 'readline';
import { Products } from './interface/products.interface';
import { ImportHistory } from 'src/import-history/interface/import-history.interface';
import { ImportHistoryService } from 'src/import-history/import-history.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private productsModel: Model<Products>,
    @InjectModel('ImportHistory') private importHistoryModel: Model<ImportHistory>,
    private readonly importHistoryService: ImportHistoryService
  ) {}

  async findAll(page): Promise<Products[]> {
    const PRODUCTS_PER_PAGE = 10;
    return this.productsModel.find().limit(PRODUCTS_PER_PAGE).skip(PRODUCTS_PER_PAGE * page).exec();
  }

  async create(product: Products): Promise<Products> {
    const createProduct = new this.productsModel(product);
    return createProduct.save();
  }

  async import(): Promise<Products[]> {
    const data = fs.createReadStream('./src/products/import-files/products_01.json', 'utf-8');
    const bulkProducts = await this.splitFile(data);

    const createImportHistory = new this.importHistoryModel({
      status: '',
      created_t: new Date().getTime() / 1000
    });

    try {
      const response = await this.productsModel.insertMany(bulkProducts);
      createImportHistory.status = 'sucess'
      await this.importHistoryService.create(createImportHistory);
      return response;
    } catch {
      createImportHistory.status = 'failed'
      await this.importHistoryService.create(createImportHistory);
    }
  }

  async findByCode(code: string): Promise<Products> {
        return this.productsModel.findOne({code});
  }

  async update(code: string, product: Products): Promise<Products> {
    return this.productsModel.findOneAndUpdate({code}, product, {new : true}).exec();
  }

  async delete(code: string) {
  let product = await this.productsModel.findOne({code}).exec();
  product.status = PRODUCT_STATUS.TRASH;
  return this.productsModel.findOneAndUpdate({code}, product, {new : true}).exec();
  }

  async splitFile (data: fs.ReadStream) : Promise<JSON[]> {
    const rl = readline.createInterface({input: data})
    const lineArray = [];
    let counter = 0

    for await (const line of rl) {
      if (counter <= 1) {
        const json = JSON.parse(line);

        json.code = json.code.replace("\"", '');
        const importTimestamp = new Date().getTime() / 1000;
        lineArray.push({status: PRODUCT_STATUS.PUBLISHED, imported_t: importTimestamp, ...json});
        counter++;
      }
    }
    
    return lineArray;
  }
}
