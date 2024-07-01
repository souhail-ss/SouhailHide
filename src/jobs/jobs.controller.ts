import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { jobs } from './jobs.entity';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  findAll(): Promise<jobs[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<jobs> {
    return this.jobsService.findOne(id);
  }

  @Post()
  create(@Body() job: jobs): Promise<jobs> {
    return this.jobsService.create(job);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() job: jobs): Promise<void> {
    return this.jobsService.update(id, job);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.jobsService.remove(id);
  }
}
