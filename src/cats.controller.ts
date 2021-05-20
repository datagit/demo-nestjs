// import { Controller, Get } from '@nestjs/common';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get(':id')
  findAll(@Req() request: Request): string {
    console.log(request.params.id);
    return 'This action returns all cats with 2id=' + request.params.id;
  }
}
