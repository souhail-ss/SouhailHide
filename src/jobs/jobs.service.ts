import { Injectable } from '@nestjs/common';
import { jobs } from './jobs.entity';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

@Injectable()
export class JobsService {
constructor(
    @InjectRepository(jobs)
    private jobsRepository: Repository<jobs>,
  ) {}

  findAll(): Promise<jobs[]> {
    return this.jobsRepository.find();
  }

  findOne(id: number): Promise<jobs> {
    return this.jobsRepository.findOneBy({ id });
  }

  create(jobs: jobs): Promise<jobs> {
    return this.jobsRepository.save(jobs);
  }

  async update(id: number, jobs: jobs): Promise<void> {
    await this.jobsRepository.update(id, jobs);
  }

  async remove(id: number): Promise<void> {
    await this.jobsRepository.delete(id);
  }

}
