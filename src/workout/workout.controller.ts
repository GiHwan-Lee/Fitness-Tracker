import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout-dto';
import { Workout } from './workout.entity';
import { UpdateWorkoutDto } from './dto/update-workout-dto';

@Controller('workout')
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {}

  // POST 요청을 통해 새로운 운동 기록을 생성
  @Post()
  @UsePipes(ValidationPipe) // 유효성 검사를 위한 파이프를 사용
  createWorkout(@Body() createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return this.workoutService.createWorkout(createWorkoutDto);
  }

  // GET 요청을 통해 모든 운동 기록을 가져옴
  @Get('/')
  findAll(): Promise<Workout[]> {
    return this.workoutService.findAll();
  }

  // ID를 통해 특정 운동 기록을 가져옴
  // (나중에 user 모듈이 생성되면 해당 사용자별로 운동 기록을 가져오는 기능을 추가해야 함.)
  @Get(':id')
  findOneById(@Param('id') id: number): Promise<Workout> {
    return this.workoutService.findOneById(id);
  }

  // PUT 요청을 통해 특정 ID의 운동 기록을 업데이트
  @Put(':id')
  updateRecord(
    @Param('id') id: number,
    @Body() updateWorkoutDto: UpdateWorkoutDto,
  ): Promise<Workout> {
    return this.workoutService.updateRecord(id, updateWorkoutDto);
  }

  // DELETE 요청을 통해 특정 ID의 운동 기록을 삭제
  @Delete(':id')
  deleteWorkout(@Param('id') id: number): Promise<void> {
    return this.workoutService.deleteWorkout(id);
  }
}
