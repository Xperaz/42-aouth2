import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersSevice } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersSevice]
})
export class UsersModule {}
