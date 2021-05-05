import { Field, ID, ObjectType } from '@nestjs/graphql';
import { SetModel } from './set.model';
import { ExerciseModel } from './exercise.model';

@ObjectType('Workout')
export class WorkoutModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  completed: Date;

  @Field(() => [ExerciseModel])
  exercises: ExerciseModel[];
}
