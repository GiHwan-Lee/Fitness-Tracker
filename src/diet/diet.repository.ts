import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Diet } from './diet.entity';
import { CreateDietDto } from './dto/create-diet-dto';

@Injectable()
export class DietRepository extends Repository<Diet> {
  constructor(private dataSourse: DataSource) {
    super(Diet, dataSourse.createEntityManager());
  }

  async createDiet(createDietDto: CreateDietDto): Promise<Diet> {
    const { date, description, calories, notes } = createDietDto;

    const diet = this.create({
      date,
      description,
      calories,
      notes,
    });

    await this.manager.save(diet);

    return diet;
  }
}
