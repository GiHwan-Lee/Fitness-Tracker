import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // TypeORM의 Entity 데코레이터를 사용하여 해당 클래스가 데이터베이스 테이블을 나타내는 것임을 나타냅니다.
export class Workout extends BaseEntity {
  @PrimaryGeneratedColumn() // 이 데코레이터는 해당 열이 기본 키이며 자동으로 생성됨을 나타냅니다.
  id: number; // 운동 기록의 고유 ID

  @Column() // 데이터베이스 테이블의 열(column)을 나타내는 데코레이터입니다.
  workout_type: string; // 운동의 종류 (예: 달리기, 수영 등)

  @Column() // 운동의 지속 시간을 나타내는 열입니다.
  duration: number; // 운동 지속 시간 (분 단위)

  @Column() // 소모된 칼로리를 나타내는 열입니다.
  calories_burned: number; // 운동으로 인한 칼로리 소모량

  @Column() // 운동이 이루어진 날짜를 나타내는 열입니다.
  date: Date; // 운동이 이루어진 날짜
}
