import { Module } from '@nestjs/common';
import { TappService } from './tapp.service';
import { TappController } from './tapp.controller';

import TappModel from './models/tapp.model'

@Module({
  imports: [
    TappModel,
  ],
  controllers: [TappController],
  providers: [TappService],
})
export class TappModule { }
