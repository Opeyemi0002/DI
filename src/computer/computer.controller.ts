import { Controller } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller()
export class ComputerController{
    constructor(private Cpuservice:CpuService, private Diskservice:DiskService){};

    


}