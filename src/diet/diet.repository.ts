import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Diet } from './diet.entity';

@Injectable()
export class DietRepository extends Repository<Diet> {
  constructor(private dataSourse: DataSource) {
    super(Diet, dataSourse.createEntityManager());
  }
}
