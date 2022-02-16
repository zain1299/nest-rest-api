import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/key';
import { ItemModule } from './item/item.modules';

@Module({
  imports: [ItemModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ItemController],
  providers: [AppService, ItemService],
})
export class AppModule {}
