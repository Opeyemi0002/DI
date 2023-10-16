import {Injectable} from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
@Injectable()
export class CpuService {
    constructor(private Powerservice:PowerService){}

    CpuProcess(a: number){
        const cpuPower = this.Powerservice.supplypower(a);

        return cpuPower;
    }
}