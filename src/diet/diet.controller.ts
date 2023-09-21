import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { DietService } from './diet.service';
import { CreateDietDto } from './dto/create-diet-dto';
import { Diet } from './diet.entity';

@Controller('diet')
export class DietController {
  constructor(private dietService: DietService) {}

  @Post()
  createDiet(@Body() createDietDto: CreateDietDto): Promise<Diet> {
    return this.dietService.createDiet(createDietDto);
  }

  @Get('/')
  findAll(): Promise<Diet[]> {
    return this.dietService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number): Promise<Diet> {
    return this.dietService.findOneById(id);
  }

  @Get('calories/:date')
  getDailyCalories(@Param('date') date: string): Promise<number> {
    return this.dietService.getDailyCalories(new Date(date));
  }
}
