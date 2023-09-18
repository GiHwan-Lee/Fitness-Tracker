import { Module } from '@nestjs/common';
import { DietController } from './diet.controller';
import { DietService } from './diet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diet } from './diet.entity';
import { DietRepository } from './diet.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Diet])],
  controllers: [DietController],
  providers: [DietService, DietRepository],
})
export class DietModule {}
