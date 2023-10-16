import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';

@Module({
    imports:[CpuModule, DiskModule ],
    controllers:[],
    providers:[]
})
export class ComputerModule {}
