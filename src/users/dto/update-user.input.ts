import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  email?: string;

  @Field(() => String)
  name?: string;
}
