import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookmarkInput {
  @Field()
  title: string;

  @Field()
  link: string;

  @Field({ nullable: true })
  description?: string;
}
