import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout-dto';
import { WorkoutRepository } from './workout.repository';
import { Workout } from './workout.entity';
import { UpdateWorkoutDto } from './dto/update-workout-dto';

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

  async updateRecord(
    id: number,
    updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<Workout> {
    const workout = await this.findOneById(id);

    if (!workout) {
      throw new NotFoundException(`Your workout is not found`);
    }

    Object.assign(workout, updateWorkoutDto); // 기존 workout 기록을 요청으로 새롭게 들어온 기록으로 변경

    await workout.save();

    return workout;
  }

  async deleteWorkout(id: number): Promise<void> {
    const result = await this.workoutRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Your ${id} is not found`);
    }
  }
}
