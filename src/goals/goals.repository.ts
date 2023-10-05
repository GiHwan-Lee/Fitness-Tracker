import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Goal } from './goals.entity';
import { CreateGoalDto } from './dto/create-goals-dto';

@Injectable()
export class GoalsRepository extends Repository<Goal> {
  constructor(private dataSourse: DataSource) {
    super(Goal, dataSourse.createEntityManager());
  }

  async createGoal(createGoalDto: CreateGoalDto): Promise<Goal> {
    const {
      title,
      description,
      status,
      progress,
      endDate,
      targetValue,
      currentValue,
    } = createGoalDto;

    const goal = this.create({
      title,
      description,
      status,
      progress,
      endDate,
      targetValue,
      currentValue,
    });

    await this.manager.save(goal);

    return goal;
  }
}
