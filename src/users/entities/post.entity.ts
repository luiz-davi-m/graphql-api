import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { User } from "./user.entity";

@ObjectType()
export class Post {
    @Field(() => Int)
    id: number;

    @Field(() => String)
    title: string;

    @Field(() => String)
    content: string;

    @Field(() => User)
    author: User;
}