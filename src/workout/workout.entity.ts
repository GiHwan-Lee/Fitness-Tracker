import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workout extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  workout_type: string;

  @Column()
  duration: number;

  @Column()
  calories_burned: number;

  @Column()
  date: Date;
}
