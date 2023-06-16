import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { IntraAuthGuard } from 'src/auth/guards';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    @Get('login')
    @UseGuards(IntraAuthGuard)
    login() {
        return 'Ok';
    }

    //api/auth/redirect
    @Get('redirect')
    @UseGuards(IntraAuthGuard)
    redirect(@Res() res: Response){
        res.send(200);
    }

    @Get('status')
    status() {}

    @Get('logout')
    logout() {}
}
