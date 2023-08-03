import { PipeTransform, BadRequestException } from "@nestjs/common";

export class PositiveIntPipe implements PipeTransform {
    transform(value: any) {
        const intValue = parseInt(value, 10);
        if (intValue <= 0) {
            throw new BadRequestException("Invalid ID (positive number is expected)");
        }
        if (isNaN(intValue)) {
            throw new BadRequestException("Invalid ID (numeric string is expected)");
        }
        return intValue;
    }
}
