import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout-dto';
import { WorkoutRepository } from './workout.repository';
import { Workout } from './workout.entity';

@Injectable()
export class WorkoutService {
  constructor(private workoutRepository: WorkoutRepository) {}

  async createWorkout(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return this.workoutRepository.createWorkout(createWorkoutDto);
  }

  async findAll(): Promise<Workout[]> {
    return await this.workoutRepository.find();
  }
}
