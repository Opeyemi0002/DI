import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplypower(watt:number){
        return `there is constant supply of ${watt} to the computer`;
    }
}
