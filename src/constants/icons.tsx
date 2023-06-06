import Image from 'next/image';

import facebook from '@public/icons/facebook.svg';
import instagram from '@public/icons/instagram.svg';
import linkedin from '@public/icons/linkedin.svg';
import company1 from '@public/icons/logo1.svg';
import company2 from '@public/icons/logo2.svg';
import company3 from '@public/icons/logo3.svg';
import company4 from '@public/icons/logo4.svg';
import company5 from '@public/icons/logo5.svg';
import twitter from '@public/icons/twitter.svg';

export const icons = {
  twitter: <Image src={twitter} alt="twitter icon" />,
  facebook: <Image src={facebook} alt="facebook icon" />,
  instagram: <Image src={instagram} alt="instagram icon" />,
  linkedin: <Image src={linkedin} alt="linkedin icon" />,
  company1: <Image src={company1} alt="company1 logo" />,
  company2: <Image src={company2} alt="company2 logo" />,
  company3: <Image src={company3} alt="company3 logo" />,
  company4: <Image src={company4} alt="company4 logo" />,
  company5: <Image src={company5} alt="company5 logo" />,
};
