import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateGoalDto {
  @IsNotEmpty()
  @IsString()
  title: string; // 목표의 제목 또는 이름

  @IsOptional()
  @IsString()
  description?: string; // 목표에 대한 추가 설명이나 상세 내용.

  @IsNotEmpty()
  @IsString()
  status: string; // 목표의 현재 상태 (예: 진행 중, 완료, 중지 등).

  @IsNotEmpty()
  @IsNumber()
  progress: number; // 목표 달성을 위한 현재 진행 상황 (예: 50% 완료).

  @IsNotEmpty()
  @IsDate()
  endDate: Date; // 목표 완료 예정 날짜.

  @IsNotEmpty()
  targetValue: string; // 목표로 설정한 값 (예: 10kg 감량, 100페이지 읽기 등).

  @IsNotEmpty()
  currentValue: string; // 현재 달성한 값 (예: 5kg 감량, 50페이지 읽기 등).
}
