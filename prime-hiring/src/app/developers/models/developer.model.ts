import { NativeLanguage } from '../enums/native-language-enum';
import { Technology } from '../enums/technology-enum';

export default interface DeveloperInterface {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  profilePicture: string;
  pricePerHour: number;
  technology: Technology;
  description: string;
  yearsOfExperience: number;
  nativeLanguage: NativeLanguage;
  linkedinProfileLink: string;
}
