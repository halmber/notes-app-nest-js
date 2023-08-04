import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): string {
        return "Hello World! Let's see my notes app built with NestJS. You can view swagger UI on /api/docs";
    }
}
