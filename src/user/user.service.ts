import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
    editUser(userId: number, dto: EditUserDto) {
      throw new Error('Method not implemented.');
    }
    constructor(private prisma : PrismaService ) {

    }
    async exitUser(userId: number,dto:EditUserDto) {
        const user = await this.prisma.user.update({
            where : { id : userId },
            data : { ...dto },
        });
        delete user.hash;
        return user;
    }
}


