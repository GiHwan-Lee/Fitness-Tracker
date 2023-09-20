import { Body, Controller, Post, Get } from '@nestjs/common';
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
}
