import { Field, ID, ObjectType } from '@nestjs/graphql';
import { SetModel } from './set.model';

@ObjectType('Exercise')
export class ExerciseModel {
  @Field(() => ID)
  id: string;

  @Field()
  completed: Date;

  @Field()
  name: string;

  @Field(() => [SetModel])
  sets: SetModel[];
}
