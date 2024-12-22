import { Module } from '@nestjs/common';
import { TappService } from './tapp.service';
import { TappController } from './tapp.controller';

import TappModel from './models/tapp.model'
import UserModel from 'src/user/models/user.model';

@Module({
  imports: [
    TappModel,
    UserModel,
  ],
  controllers: [TappController],
  providers: [TappService],
})
export class TappModule { }
