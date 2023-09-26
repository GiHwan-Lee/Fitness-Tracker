import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout-dto';
import { WorkoutRepository } from './workout.repository';
import { Workout } from './workout.entity';
import { UpdateWorkoutDto } from './dto/update-workout-dto';

@Injectable()
export class WorkoutService {
  constructor(private workoutRepository: WorkoutRepository) {}

  // 새로운 운동 기록을 생성하는 메소드
  async createWorkout(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return this.workoutRepository.createWorkout(createWorkoutDto);
  }

  // 모든 운동 기록을 가져오는 메소드
  async findAll(): Promise<Workout[]> {
    return await this.workoutRepository.find();
  }

  // 주어진 ID에 해당하는 운동 기록을 찾는 메소드
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

  // 주어진 ID의 운동 기록을 업데이트하는 메소드
  async updateRecord(
    id: number,
    updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<Workout> {
    const workout = await this.findOneById(id);

    if (!workout) {
      throw new NotFoundException(`Your workout is not found`);
    }

    // 기존 workout 기록을 요청으로 새롭게 들어온 기록으로 변경
    Object.assign(workout, updateWorkoutDto);

    await workout.save();

    return workout;
  }

  // 주어진 ID의 운동 기록을 삭제하는 메소드
  async deleteWorkout(id: number): Promise<void> {
    const result = await this.workoutRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Your ${id} is not found`);
    }
  }
}
