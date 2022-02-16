import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './interfaces/item.interfaces';

@Injectable()
export class ItemService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
  async findAll(): Promise<Item[]> {
    return this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return this.itemModel.findOne({ _id: id });
  }
}
