import { Injectable } from '@nestjs/common';
import { DietRepository } from './diet.repository';
import { CreateDietDto } from './dto/create-diet-dto';
import { Diet } from './diet.entity';

@Injectable()
export class DietService {
  constructor(private dietRepository: DietRepository) {}

  async createDiet(createDietDto: CreateDietDto): Promise<Diet> {
    return this.dietRepository.createDiet(createDietDto);
  }

  async findAll(): Promise<Diet[]> {
    return await this.dietRepository.find();
  }
}
