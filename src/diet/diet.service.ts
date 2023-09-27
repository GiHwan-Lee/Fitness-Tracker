import { Injectable, NotFoundException } from '@nestjs/common';
import { DietRepository } from './diet.repository';
import { CreateDietDto } from './dto/create-diet-dto';
import { Diet } from './diet.entity';
import { UpdateDietDto } from './dto/update-diet-dto';

@Injectable()
export class DietService {
  constructor(private dietRepository: DietRepository) {}

  // 새로운 식단을 생성하고 반환
  async createDiet(createDietDto: CreateDietDto): Promise<Diet> {
    return this.dietRepository.createDiet(createDietDto);
  }

  // 모든 식단 기록을 반환
  async findAll(): Promise<Diet[]> {
    return await this.dietRepository.find();
  }

  // 주어진 ID에 해당하는 식단 기록을 찾아 반환
  async findOneById(id: number): Promise<Diet> {
    const query = await this.dietRepository.createQueryBuilder('workout');

    // ID 조건을 적용
    query.where('diet.id = :id', {
      id,
    });

    const found = await query.getOne();

    if (!found) {
      throw new NotFoundException(`Can't find record with your ${id}`);
    }

    return found;
  }

  // 주어진 날짜의 총 칼로리를 계산한 뒤 반환
  async getDailyCalories(date: Date): Promise<number> {
    const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 변환
    const records = await this.dietRepository
      .createQueryBuilder('diet')
      .where("to_char(diet.date, 'YYYY-MM-DD') = :dateString", { dateString })
      .getMany();

    return records.reduce((acc, record) => acc + record.calories, 0);
  }

  // 주어진 ID에 해당하는 식단을 업데이트 하고 반환
  async updateDiet(id: number, updateDietDto: UpdateDietDto): Promise<Diet> {
    const diet = await this.dietRepository.findOneById(id);

    if (!diet) {
      throw new NotFoundException(`Diet with ID ${id} not found`);
    }

    Object.assign(diet, updateDietDto);

    return this.dietRepository.save(diet);
  }

  // 주어진 ID에 해당하는 식단을 삭제
  async deleteDiet(id: number): Promise<void> {
    const result = await this.dietRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Your ${id} is not found `);
    }
  }
}
