import { Module } from '@nestjs/common';
import { WorkoutModule } from './workout/workout.module';
import { typeORMConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), WorkoutModule],
})
export class AppModule {}
