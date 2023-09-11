import { IsNotEmpty } from 'class-validator';

export class CreateWorkoutDto {
  @IsNotEmpty()
  workout_type: string;
  @IsNotEmpty()
  duration: number;
  @IsNotEmpty()
  calories_burned: number;
  @IsNotEmpty()
  date: Date;
}
