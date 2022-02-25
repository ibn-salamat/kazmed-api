import { Injectable } from '@nestjs/common';
import { doctors, DoctorType } from './data/doctors';

@Injectable()
export class AppService {
  getDoctors(): DoctorType[] {
    return doctors;
  }
}
