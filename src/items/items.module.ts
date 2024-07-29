import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './item.schema';

@Module({
  controllers: [ItemsController],
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],

  providers: [ItemsService],
})
export class ItemsModule {}
