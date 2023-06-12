import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GetCurrentUser } from '../auth/decorator/current-user.decorator';
import { JwtGuard } from '../auth/guard';
import { EditUserInput } from './dto';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(() => User)
@UseGuards(JwtGuard)
export class UserResolver {
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
