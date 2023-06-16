import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { UsersSevice } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersSevice) {}

    // @ApiOkResponse({type: User, isArray: true})
    // @Get()
    // getUsers(): User[] {
    //     return this.usersService.findAll();
    // }

    // @ApiOkResponse({type: User})
    // @ApiNotFoundResponse()
    // @Get(':id')
    // getUserById(@Param('id') id: string) : User {
    //     const user = this.usersService.findById(+id);

    //     if (!user){
    //         throw new NotFoundException('It seems that this user doesn\'t exist');
    //     }
    //     return user;
    // }

    // @Post()
    // createUser(@Body() body: CreateUserDto) : User {
    //     return this.usersService.createUser(body);
    // }

}
