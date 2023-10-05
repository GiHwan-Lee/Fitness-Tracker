import { Body, Controller, Post } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { CreateGoalDto } from './dto/create-goals-dto';
import { Goal } from './goals.entity';

@Controller('goals')
export class GoalsController {
  constructor(private goalsService: GoalsService) {}

  @Post()
  createGoal(@Body() createGoalDto: CreateGoalDto): Promise<Goal> {
    return this.goalsService.createGoal(createGoalDto);
  }
}
