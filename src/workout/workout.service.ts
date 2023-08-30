import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout-dto';

@Injectable()
export class WorkoutService {
  constructor() {}

  async createWorkout(createWorkoutDto: CreateWorkoutDto) {}
}
