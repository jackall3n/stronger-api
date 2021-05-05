import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Workout')
export class WorkoutModel {
  @Field(() => ID)
  id: string;
}
