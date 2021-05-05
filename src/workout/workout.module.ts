import { Module } from '@nestjs/common';
import { WorkoutResolver } from './workout.resolver';

@Module({
  providers: [WorkoutResolver],
})
export class WorkoutModule {}
