import { Controller, Post, Body, } from '@nestjs/common';
import { TappService } from './tapp.service';

// types
import type Tapp from './interfaces/tapp.interface'

// all aboout MongoDB
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TappClass } from './schemas/tapp.schema';


@Controller('tapp')
export class TappController {
  constructor(private readonly tappService: TappService,
    @InjectModel('Tapp') private TappModel: Model<TappClass>,
  ) { }

  @Post('create')
  async createTapp(
    @Body('tapp') tapp: Tapp
  ) {
    return await this.TappModel.create(tapp)
  }
}
