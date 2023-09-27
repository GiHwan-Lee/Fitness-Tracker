import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { DietService } from './diet.service';
import { CreateDietDto } from './dto/create-diet-dto';
import { Diet } from './diet.entity';
import { UpdateDietDto } from './dto/update-diet-dto';

@Controller('diet')
export class DietController {
  constructor(private dietService: DietService) {}

  // 새로운 식단 기록을 생성
  @Post()
  createDiet(@Body() createDietDto: CreateDietDto): Promise<Diet> {
    return this.dietService.createDiet(createDietDto);
  }

  // 모든 식단 기록 가져오기
  @Get('/')
  findAll(): Promise<Diet[]> {
    return this.dietService.findAll();
  }

  // ID를 기반으로 특정 식단 기록을 가져오기
  @Get(':id')
  findOneById(@Param('id') id: number): Promise<Diet> {
    return this.dietService.findOneById(id);
  }

  // 특정 날짜의 총 칼로리 가져오기
  @Get('calories/:date')
  getDailyCalories(@Param('date') date: string): Promise<number> {
    return this.dietService.getDailyCalories(new Date(date));
  }

  // ID를 기반으로 특정 식단 기록을 업데이트하기
  @Put(':id')
  updateDiet(@Param('id') id: number, @Body() updateDietDto: UpdateDietDto) {
    return this.dietService.updateDiet(id, updateDietDto);
  }

  // ID를 기반으로 특정 식단 기록을 삭제하기
  @Delete(':id')
  deleteDiet(@Param('id') id: number): Promise<void> {
    return this.dietService.deleteDiet(id);
  }
}
