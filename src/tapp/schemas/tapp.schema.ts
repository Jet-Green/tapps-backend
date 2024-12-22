import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
export type TappDocument = HydratedDocument<TappClass>;

import type Button from '../interfaces/tapp.interface';

@Schema()
export class TappClass {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  logoLink: string;

  @Prop({
    type: Array,
    default: [],
    required: false,
  })
  buttons: Button[];

  @Prop({
    type: mongoose.Schema.Types.ObjectId, ref: 'User',
  })
  creator: mongoose.Schema.Types.ObjectId;
}

export const TappSchema = SchemaFactory.createForClass(TappClass);