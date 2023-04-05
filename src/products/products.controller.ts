import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Request } from 'express';
import { Products } from './interface/products.interface';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService
      ) {}
    
      @Get()
      async findAll(@Req() req: Request): Promise<Products[]> {
        const page = parseInt(req.query.page as any) || 1;
        return this.productsService.findAll(page);
      }

      @Get('import')
      async import(): Promise<Products[]> {
        return this.productsService.import();
      }
    
      @Post()
      async create(@Body() product: Products): Promise<Products> {
        return this.productsService.create(product);
      }
    
      @Get(':code')
      async findByCode(@Param('code') code: string): Promise<Products> {
        return this.productsService.findByCode(code);
      }
    
      @Put(':code')
      async update(@Param('code') code: string, @Body() productToUpdate: Products): Promise<Products> {
        return this.productsService.update(code, productToUpdate);
      }
    
      @Delete(':code')
      async remover(@Param('code') code: string): Promise<Products> {
        return this.productsService.delete(code);
      } 
}