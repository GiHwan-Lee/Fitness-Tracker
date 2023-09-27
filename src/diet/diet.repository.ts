import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Diet } from './diet.entity';
import { CreateDietDto } from './dto/create-diet-dto';

@Injectable()
export class DietRepository extends Repository<Diet> {
  // DataSource와 함께 생성자를 통해 초기화
  constructor(private dataSourse: DataSource) {
    super(Diet, dataSourse.createEntityManager());
  }

  // 새로운 식단을 생성하고, 데이터베이스에 저장한 뒤 반환
  async createDiet(createDietDto: CreateDietDto): Promise<Diet> {
    const { date, description, calories, notes } = createDietDto;

    const diet = this.create({
      date,
      description,
      calories,
      notes,
    });

    await this.manager.save(diet); // 식단 정보를 저장

    return diet;
  }
}
