import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Set')
export class SetModel {
  @Field()
  checked: boolean;
}
