import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout-dto';
import { Workout } from './workout.entity';

@Controller('workout')
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {}

  // 운동 기록 생성
  @Post()
  createWorkout(@Body() createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return this.workoutService.createWorkout(createWorkoutDto);
  }

  // 모든 운동 기록 가져오기
  @Get('/')
  findAll(): Promise<Workout[]> {
    return this.workoutService.findAll();
  }
}
