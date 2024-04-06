import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
export class User {

  @Field(() => Int)
  id: number;
  
  @Field()
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => [Post], { defaultValue: [] })
  posts?: Post[];
}
