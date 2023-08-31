import { DataSource, Repository } from 'typeorm';
import { Workout } from './workout.entity';
import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout-dto';

@Injectable()
export class WorkoutRepository extends Repository<Workout> {
  constructor(private dataSourse: DataSource) {
    super(Workout, dataSourse.createEntityManager());
  }

  async createWorkout(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    const { workout_type, duration, calories_burned, date } = createWorkoutDto;

    const workout = this.create({
      workout_type,
      duration,
      calories_burned,
      date,
    });

    await this.manager.save(workout);

    return workout;
  }
}
