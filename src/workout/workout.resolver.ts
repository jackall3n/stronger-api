import { Query, Resolver } from '@nestjs/graphql';
import { WorkoutModel } from './models/workout.model';

@Resolver(() => WorkoutModel)
export class WorkoutResolver {
  @Query(() => [WorkoutModel])
  async workouts() {
    return [];
  }
}
