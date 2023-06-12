import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class EditBookmarkInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  link?: string;

  @Field({ nullable: true })
  description?: string;
}
