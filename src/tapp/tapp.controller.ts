import { Controller, Post, Body, Get, Query, } from '@nestjs/common';
import { TappService } from './tapp.service';

// types
import type Tapp from './interfaces/tapp.interface'

// all aboout MongoDB
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TappClass } from './schemas/tapp.schema';
import { UserClass } from 'src/user/schemas/user.schema';


@Controller('tapp')
export class TappController {
  constructor(private readonly tappService: TappService,
    @InjectModel('Tapp') private TappModel: Model<TappClass>,
    @InjectModel('User') private UserModel: Model<UserClass>,
  ) { }

  @Post('create')
  async createTapp(
    @Body('tapp') tapp: Tapp
  ) {
    try {
      const tappFromDb = await this.TappModel.create(tapp);
      let tappId = tappFromDb._id;

      await this.UserModel.findByIdAndUpdate(tappFromDb.creator, { $push: { tapps: tappId } });

      return tappFromDb
    } catch (error) {
      return error
    }
  }

  @Get('get-by-id')
  async getById(
    @Query('_id') tappId: string
  ) {
    try {
      return await this.TappModel.findById(tappId);
    } catch (error) {
      return error;
    }
  }

  @Get('get-my-tapps')
  async getMyTapps(
    @Query('user_id') userId: string
  ) {
    return (await this.UserModel.findById(userId).populate('tapps')).tapps;
  }
}
