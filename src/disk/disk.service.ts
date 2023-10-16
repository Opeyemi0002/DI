import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
@Injectable()
export class DiskService {
    constructor(private Powerservice: PowerService){}

    info(){
        this.Powerservice.supplypower(10)
        return `this disk is running on  power of 10`;
    }

    
}