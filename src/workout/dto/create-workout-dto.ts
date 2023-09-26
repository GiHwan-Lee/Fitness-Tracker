import { IsNotEmpty } from 'class-validator';

export class CreateWorkoutDto {
  @IsNotEmpty() // 'class-validator' 라이브러리의 데코레이터로, 해당 필드는 비어 있지 않아야 함을 의미합니다.
  workout_type: string; // 운동의 종류 (예: 달리기, 수영 등)를 나타내는 필드입니다.

  @IsNotEmpty()
  duration: number; // 운동 지속 시간 (분 단위)을 나타내는 필드입니다.

  @IsNotEmpty()
  calories_burned: number; // 운동으로 인한 칼로리 소모량을 나타내는 필드입니다.

  @IsNotEmpty()
  date: Date; // 운동이 이루어진 날짜를 나타내는 필드입니다.
}
