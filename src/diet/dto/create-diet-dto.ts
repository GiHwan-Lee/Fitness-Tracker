export class CreateDietDto {
  description?: string; // ? 표시는 해당 필드가 선택적(optional)임을 의미합니다.
  calories: number;
  notes?: string;
}
