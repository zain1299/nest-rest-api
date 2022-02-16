import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemsDto } from './dto/create-items.dto';
import { ItemService } from './item.service';
import { Item } from './interfaces/item.interfaces';

@Controller('item')
export class ItemController {
  // @Get()
  // findAll(@Req() req: Request, @Res() res: Response): Response {
  //   console.log('okay', req.url);
  //   return res.send('Hello World');
  // }

  constructor(private readonly itemServices: ItemService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemServices.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemServices.findOne(id);
  }

  @Post()
  create(@Body() createItemsDto: CreateItemsDto): string {
    return `Name: ${createItemsDto.name} Description: ${createItemsDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Deleted Item ${id}`;
  }

  @Put(':id')
  update(@Body() updatedItemDto: CreateItemsDto, @Param('id') id): string {
    return `Updated Id ${id} Name: ${updatedItemDto.name} Description: ${updatedItemDto.description}`;
  }
}
