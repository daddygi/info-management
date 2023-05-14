export type Inhabitant = {
   firstname: string;
   middleinitial: string;
   lastname: string;
   suffix?: string;
   gender: string;
   age: number;
   birthdate: string;
   civilstatus: string;
   residenttype: string;
   residentid: number;
   emailaddress?: string;
   contactnumber?: string;
   occupation: string;
   addressline1: string;
   addressline2: string;
   password: string;
   photo?: string;
   dateregistered: Date; 
}