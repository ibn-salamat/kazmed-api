import { Controller, Get, Render } from '@nestjs/common';
import { DoctorType } from './data/doctors';
import { ClinicType } from './data/clinics';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'API List' };
  }

  @Get('/api/doctors')
  getDoctors(): DoctorType[] {
    return this.appService.getDoctors();
  }

  @Get('/api/clinics')
  getClinics(): ClinicType[] {
    return this.appService.getClinics();
  }
}
