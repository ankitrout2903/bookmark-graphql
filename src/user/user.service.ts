import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserInput } from './dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: number, input: EditUserInput): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { ...input },
    });
    delete user.hash;
    return user;
  }

  async getUser(userId: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    delete user.hash;
    return user;
  }

  // Add other user-related methods as needed for GraphQL queries and mutations
}
