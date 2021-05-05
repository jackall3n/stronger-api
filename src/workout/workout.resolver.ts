import { Args, Query, Resolver } from '@nestjs/graphql';
import { WorkoutModel } from './models/workout.model';
import { WorkoutService } from './workout.service';

@Resolver(() => WorkoutModel)
export class WorkoutResolver {
  constructor(private workoutService: WorkoutService) {}

  @Query(() => [WorkoutModel])
  async workouts(
    @Args('id') id: string,
    @Args('limit', { nullable: true }) limit?: number,
  ) {
    return this.workoutService.workouts(id, limit);
  }
}
