import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Bookmark {
@Field(() => Int)
id: number;

@Field()
createdAt: Date;

@Field()
updatedAt: Date;

@Field()
title: string;

@Field({ nullable: true })
description?: string;

@Field()
link: string;

@Field(() => Int)
userId: number;
}