import { Injectable } from '@nestjs/common';
import { doctors, DoctorType } from './data/doctors';

@Injectable()
export class AppService {
  getInfo(): string {
    return `
    Doctors list: GET = /api/doctors returns DoctorType[]

    type DoctorType = {
      fullname: string;
      class: string; // type of doctor
      email: string;

      address?: {
        longitude: string;
        latitude: string;
      };

      rating: number;
      profileImgUrl?: string;
      
      additionalInfo: {
        about?: string;
        qualifications?: string[];
        services?: string[];
        reviews: ReviewType[];
        fees?: any;
      };
    }

    type ReviewType = {
      username: string;
      comment: string;
      datePublish: Date;
    };
    
    `;
  }

  getDoctors(): DoctorType[] {
    return doctors;
  }
}
