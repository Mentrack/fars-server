import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, DatabaseService],
})
export class UserModule {}
