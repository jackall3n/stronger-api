import { Args, Query, Resolver } from '@nestjs/graphql';

import { WorkoutService } from './workout.service';
import { WorkoutModel } from './models/workout.model';
import { WorkoutMapper } from './workout.mapper';

@Resolver('Workout')
export class WorkoutResolver {
  constructor(
    private readonly workoutService: WorkoutService,
    private readonly workoutMapper: WorkoutMapper,
  ) {}

  @Query(() => [WorkoutModel])
  async workouts(
    @Args('id') id: string,
    @Args('limit', { nullable: true }) limit?: number,
  ) {
    const workouts = await this.workoutService.workouts(id, limit);

    return workouts.map((workout) => this.workoutMapper.map(workout));
  }
}
