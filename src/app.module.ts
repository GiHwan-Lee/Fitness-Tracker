import { Module } from '@nestjs/common';
import { WorkoutModule } from './workout/workout.module';
import { typeORMConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DietModule } from './diet/diet.module';
import { GoalsModule } from './goals/goals.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    WorkoutModule,
    DietModule,
    GoalsModule,
  ],
})
export class AppModule {}
