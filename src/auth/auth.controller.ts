import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticatedGuard, IntraAuthGuard } from 'src/auth/guards';
import { User } from '@prisma/client';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

    @Get('login')
    @UseGuards(IntraAuthGuard)
    login() {
        return 'Ok';
    }

    @Get('redirect')
    @UseGuards(IntraAuthGuard)
    redirect(@Res() res: Response){
        res.redirect('http://localhost:3000/profile');
    }

    @Get('status')
    @UseGuards(AuthenticatedGuard)
    status(@Req() req: Request & { user: User }) {
        return req.user;
    }
    
    @Get('logout')
    @UseGuards(AuthenticatedGuard)
    logout(@Req() req, @Res() res: Response) {
        req.logout(() => {
            res.redirect('/');
        });
    }
}
