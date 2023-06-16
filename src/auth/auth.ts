import { UserDetails } from "src/utils/types";
import { Prisma } from "@prisma/client";
import { User } from "@prisma/client";

export interface AuthenticationProvider {
    validateUservalidateUser(details: Prisma.UserCreateInput) :  Promise<User>;
    createUser(details: Prisma.UserCreateInput) :  Promise<User>;
    findUser();
}