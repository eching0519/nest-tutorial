import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('health')
export class HealthController {
    @Get()
    public async health(): Promise<any> {
        let result = {}
        let success = true

        result = {
            success: success
        }

        if (!success) {
            throw new HttpException('Error', HttpStatus.BAD_REQUEST);
        }

        return result;
    }
}