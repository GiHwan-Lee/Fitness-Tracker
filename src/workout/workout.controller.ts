import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  // 특정 운동 기록 가져오기 (나중에 user 모듈 만들면 그 때는 user별로 운동기록 가져오는 핸들러 만들어야 한다.)
  @Get(':id')
  findOneById(@Param('id') id: number): Promise<Workout> {
    return this.workoutService.findOneById(id);
  }
}
