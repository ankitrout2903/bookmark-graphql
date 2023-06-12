import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../../user/user.model'; // Replace with the correct path to the User type

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext): User | any => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    if (data) return request.user[data];
    return request.user;
  },
);
