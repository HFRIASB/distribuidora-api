import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductoService {
  constructor(@InjectRepository(Producto)private productRepository:Repository<Producto>){
  }
  async create(createProductoDto: CreateProductoDto) {
    return await this.productRepository.save(createProductoDto);
  }

  findAll() {
    return this.productRepository.find({});
  }

  findOne(id_prod: number) {
    return this.productRepository.findOne({ where: 
      {id_prod,}
  });
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return this.productRepository.update(id,updateProductoDto)
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
