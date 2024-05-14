import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'prisma/service/prima.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService){}

  async create(createUserInput: CreateUserInput): Promise<User> {
    let user: User;
    try {
      user = await this.prisma.user.create({
        data: createUserInput
      });
    } catch (error) {
     throw new Error(error);
    }

    return user;
  }

  async findAll(): Promise<Array<User>> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    })

    if(!user) throw new NotFoundException(`User nor found for this id: ${id}`);

    return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    let user: User;
    try {
      user = await this.prisma.user.update({
        where: {
          id
        },
        data: {
          ...(updateUserInput.email && {
            email: updateUserInput.email
          }),
          ...(updateUserInput.name && {
            name: updateUserInput.name
          })
        }
      })
    } catch (error) {
      throw new NotFoundException(error.meta.cause);
    }
    return user;
  }

  async remove(id: number) {
    try {
      const user = await this.prisma.user.delete({
        where: {
          id
        }
      })
    } catch (error) {
      throw new NotFoundException(error.meta.cause);
    }

    return `This action removes a #${id} user`;
  }
}
