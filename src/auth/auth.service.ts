import { Injectable } from "@nestjs/common";
import { AuthenticationProvider } from "./auth";
import { PrismaService } from "src/prisma/prisma.service";
import { UserDetails } from "src/utils/types";
import { Prisma, PrismaClient, User } from "@prisma/client";


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    validateUservalidateUser(details: Prisma.UserCreateInput): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async validateUser(details: Prisma.UserUncheckedCreateInput) {
        const user = await this.prisma.user.findUnique({
            where: {login: details.login},
        });
        if (user) return user;
        const newUser = await this.createUser(details);
        return newUser;
    }

    createUser(details: Prisma.UserCreateInput) :  Promise<User> {
        try {
          const user = this.prisma.user.create({
            data: details,
        });
          return user;
        } catch (error) {
          console.error('Error creating user:', error);
        }
      }

    findUser() {
        throw new Error("Method not implemented.");
    }
}