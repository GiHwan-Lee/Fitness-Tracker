import { Injectable, NotFoundException } from '@nestjs/common';
import { DietRepository } from './diet.repository';
import { CreateDietDto } from './dto/create-diet-dto';
import { Diet } from './diet.entity';
import { UpdateDietDto } from './dto/update-diet-dto';

@Injectable()
export class DietService {
  constructor(private dietRepository: DietRepository) {}

  async createDiet(createDietDto: CreateDietDto): Promise<Diet> {
    return this.dietRepository.createDiet(createDietDto);
  }

  async findAll(): Promise<Diet[]> {
    return await this.dietRepository.find();
  }

  async findOneById(id: number): Promise<Diet> {
    const query = await this.dietRepository.createQueryBuilder('workout');

    query.where('diet.id = :id', {
      id,
    });

    const found = await query.getOne();

    if (!found) {
      throw new NotFoundException(`Can't find record with your ${id}`);
    }

    return found;
  }

  async getDailyCalories(date: Date): Promise<number> {
    const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 변환
    const records = await this.dietRepository
      .createQueryBuilder('diet')
      .where("to_char(diet.date, 'YYYY-MM-DD') = :dateString", { dateString })
      .getMany();

    return records.reduce((acc, record) => acc + record.calories, 0);
  }

  async updateDiet(id: number, updateDietDto: UpdateDietDto): Promise<Diet> {
    const diet = await this.dietRepository.findOneById(id);

    if (!diet) {
      throw new NotFoundException(`Diet with ID ${id} not found`);
    }

    Object.assign(diet, updateDietDto);

    return this.dietRepository.save(diet);
  }

  async deleteDiet(id: number): Promise<void> {
    const result = await this.dietRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Your ${id} is not found `);
    }
  }
}
