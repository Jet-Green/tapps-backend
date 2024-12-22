import { MongooseModule } from "@nestjs/mongoose";
import { TappSchema } from "../schemas/tapp.schema";

let TappModel = MongooseModule.forFeature([{ name: 'Tapp', schema: TappSchema, collection: 'tapps' }])
export default TappModel