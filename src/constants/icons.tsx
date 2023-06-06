import Image from 'next/image';

import facebook from '@public/icons/facebook.svg';
import instagram from '@public/icons/instagram.svg';
import linkedin from '@public/icons/linkedin.svg';
import twitter from '@public/icons/twitter.svg';

export const icons = {
  twitter: <Image src={twitter} alt="twitter icon" />,
  facebook: <Image src={facebook} alt="facebook icon" />,
  instagram: <Image src={instagram} alt="instagram icon" />,
  linkedin: <Image src={linkedin} alt="linkedin icon" />,
};
