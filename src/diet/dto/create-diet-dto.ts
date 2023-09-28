import { IsNotEmpty } from 'class-validator';

export class CreateDietDto {
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  description?: string; // ? 표시는 해당 필드가 선택적(optional)임을 의미합니다.

  @IsNotEmpty()
  calories: number;

  @IsNotEmpty()
  notes?: string;
}
