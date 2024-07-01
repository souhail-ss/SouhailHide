import { JobsService } from './jobs.service';
import { jobs } from './jobs.entity';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    findAll(): Promise<jobs[]>;
    findOne(id: number): Promise<jobs>;
    create(job: jobs): Promise<jobs>;
    update(id: number, job: jobs): Promise<void>;
    remove(id: number): Promise<void>;
}
