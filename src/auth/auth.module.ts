import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { IntraStrategy } from './strategies';
import { AuthService } from './auth.service';
import { PrismaClient } from '@prisma/client';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [
    IntraStrategy,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    PrismaClient,
    PrismaService,
  ],
  imports: [PrismaClient, UsersModule],
})
export class AuthModule {}
