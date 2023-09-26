import { DataSource, Repository } from 'typeorm';
import { Workout } from './workout.entity';
import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout-dto';

@Injectable()
export class WorkoutRepository extends Repository<Workout> {
  // DataSource를 이용하여 EntityManager를 생성하는 생성자
  constructor(private dataSourse: DataSource) {
    super(Workout, dataSourse.createEntityManager());
  }

  // 새로운 운동 기록을 생성하고 저장하는 메소드
  async createWorkout(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    const { workout_type, duration, calories_burned, date } = createWorkoutDto;

    // DTO를 사용하여 Workout 엔티티 생성
    const workout = this.create({
      workout_type,
      duration,
      calories_burned,
      date,
    });

    // 생성된 Workout 엔티티를 저장
    await this.manager.save(workout);

    return workout;
  }
}
