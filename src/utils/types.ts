import { User } from "@prisma/client";

export type UserDetails = {
    login?: string;
    name: string;
    id?: string;
    avatar?: string;
    email?: string;
    intraId: string;
}

export type Done = (err: Error, user: User) => void;