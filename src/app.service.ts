import { Injectable } from '@nestjs/common';
import { doctors, DoctorType } from './data/doctors';
import { clinics, ClinicType } from './data/clinics';

@Injectable()
export class AppService {
  getDoctors(): DoctorType[] {
    return doctors;
  }

  getClinics(): ClinicType[] {
    return clinics;
  }
}
