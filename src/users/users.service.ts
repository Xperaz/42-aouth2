import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";


@Injectable()
export class UsersSevice {
    // private users: User[] = [
    //                         {id: 0, name: 'Azedine'},
    //                         {id: 1, name: 'Marius' }
    //                     ]

    // findAll(): User[] {
    //     return this.users;
    // }

    // findById(userId: number) : User {
    //     return this.users.find(user => user.id === userId);
    // }

    // createUser(CreateUserDto: CreateUserDto) : User {
    //     const newUser = {id: Date.now(), ...CreateUserDto};

    //     this.users.push(newUser);

    //     return (newUser);
    // }
}