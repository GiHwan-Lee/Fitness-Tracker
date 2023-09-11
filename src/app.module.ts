import { Module } from '@nestjs/common';
import { WorkoutModule } from './workout/workout.module';
import { typeORMConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DietModule } from './diet/diet.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), WorkoutModule, DietModule],
})
export class AppModule {}
