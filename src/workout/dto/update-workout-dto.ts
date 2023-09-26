export class UpdateWorkoutDto {
  workout_type?: string; // (선택적) 변경하고자 하는 운동의 종류 (예: 달리기, 수영 등)를 나타내는 필드입니다.

  duration?: number; // (선택적) 변경하고자 하는 운동 지속 시간 (분 단위)을 나타내는 필드입니다.

  calories_burned?: number; // (선택적) 변경하고자 하는 운동으로 인한 칼로리 소모량을 나타내는 필드입니다.

  date?: Date; // (선택적) 변경하고자 하는 운동이 이루어진 날짜를 나타내는 필드입니다.
}
