import { UsersService } from './users.service';
import { User } from './users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(user: User): Promise<User>;
    update(id: number, user: User): Promise<void>;
    remove(id: number): Promise<void>;
}
