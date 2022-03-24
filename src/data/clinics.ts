export type ClinicType = {
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
};

export type ReviewType = {
  username: string;
  comment: string;
  datePublish: Date;
};

export const clinics: ClinicType[] = [
  {
    fullname: 'Nurlykhan',
    class: 'Хирург',
    email: 'email@en.com',
    address: {
      longitude: '1212',
      latitude: 'sd',
    },
    rating: 80,
    profileImgUrl:
      'https://static.wikia.nocookie.net/avatar/images/e/e6/Black_Panther.jpg/revision/latest/top-crop/width/360/height/450?cb=20131206112922',
    additionalInfo: {
      about: 'young doctor who wants to help',
      qualifications: ['html', 'css', 'js'],
      services: ['ui', 'frontend', 'mobile'],
      reviews: [
        {
          username: 'almas',
          comment: 'good doctor',
          datePublish: new Date(),
        },
        {
          username: 'man',
          comment: 'well',
          datePublish: new Date(),
        },
      ],
    },
  },
];
