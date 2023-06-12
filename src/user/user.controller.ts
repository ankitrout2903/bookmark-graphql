import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserInput } from './dto';
import { UserService } from './user.service';
// import { UseGuards } from '@nestjs/graphql';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetCurrentUser } from '../auth/decorator/current-user.decorator';
import { User } from './user.model';


@Resolver()
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async me(@GetCurrentUser() user: User) {
    return user;
  }

  @Mutation(() => User)
  async editUser(@GetCurrentUser() user: User, @Args('input') input: EditUserInput) {
    return this.userService.editUser(user.id, input);
  }
}
