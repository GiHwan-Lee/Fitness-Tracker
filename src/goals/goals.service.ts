import { Injectable } from '@nestjs/common';
import { GoalsRepository } from './goals.repository';
import { CreateGoalDto } from './dto/create-goals-dto';
import { Goal } from './goals.entity';

@Injectable()
export class GoalsService {
  constructor(private goalsRepository: GoalsRepository) {}

  async createGoal(createGoalDto: CreateGoalDto): Promise<Goal> {
    return this.goalsRepository.createGoal(createGoalDto);
  }
}
