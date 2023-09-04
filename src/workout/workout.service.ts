import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOneById(id: number): Promise<Workout> {
    const query = await this.workoutRepository.createQueryBuilder('workout');

    query.where('workout.id = :id', {
      id,
    });

    const found = await query.getOne();

    if (!found) {
      throw new NotFoundException(`Can't find record with your ${id}`);
    }

    return found;
  }
}
