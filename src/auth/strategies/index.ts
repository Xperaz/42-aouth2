import { Strategy } from 'passport-42';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from '../auth.service';
import { AuthenticationProvider } from '../auth';


@Injectable()
export class IntraStrategy extends PassportStrategy(Strategy, '42') {
    constructor( @Inject('AUTH_SERVICE') 
                private readonly authService: AuthService,
        ) {
            super({
                clientID: process.env.INTRA_UID,
                clientSecret: process.env.INTRA_SECRET,
                callbackURL: process.env.INTRA_CALLBACK_URI,
                scope: ['public'],
            });
    }

    async validate(accessToken: string, refreshToken: string, profile: any){
        const details : User= {
            login: profile._json.login, email: profile._json.email, avatar: profile._json.image.link, name: profile._json.usual_full_name, banner: '',
            id: 0
        };
       return await this.authService.validateUser(details);
    }
}