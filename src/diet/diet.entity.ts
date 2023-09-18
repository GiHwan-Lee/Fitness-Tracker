import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Diet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  date: Date; // 사용자가 해당 식단을 기록한 날짜

  @Column()
  description: string; // 해당 날짜에 섭취한 음식의 간략한 설명

  @Column()
  calories: number; // 해당 날짜에 섭취한 칼로리 총량

  @Column()
  notes: string; // 해당 날짜의 식단에 대한 추가적인 메모나 특이사항
}
