import { Controller, Get, Render } from '@nestjs/common';
import { DoctorType } from './data/doctors';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Doctors list: GET = /api/doctors returns DoctorType[]' };
  }

  @Get('/api/doctors')
  getDoctors(): DoctorType[] {
    return this.appService.getDoctors();
  }
}
