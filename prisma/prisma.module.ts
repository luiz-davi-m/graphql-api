import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./service/prima.service";

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule{

}