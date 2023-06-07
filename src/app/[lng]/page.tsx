'use client';

import React, { Fragment, useEffect, useState } from 'react';

import AuthorList from '@/components/blocks/AuthorsList';
import BrandsBlock from '@/components/blocks/BrandsBlock';
import CategoriesSection from '@/components/blocks/CategoriesSection';
import FeaturedPostsBlock from '@/components/blocks/FeaturedPostsBlock';
import HomeHeader from '@/components/blocks/HomeHeader';
import HomeHistoryBlock from '@/components/blocks/HomeHistoryBlock';
import JoinBlock from '@/components/blocks/JoinBlock';
import MissionBlock from '@/components/blocks/MissionBlock';
import TestimonialsBlock from '@/components/blocks/TestimonialsBlock';

import { useMyTranslation } from '../i18n/client';
import { IPage } from '../types';

const Home: React.FC<IPage> = ({ params: { lng } }) => {
  const { t } = useMyTranslation();

  const components = [
    <HomeHeader lng={lng} />,
    <FeaturedPostsBlock lng={lng} />,
    <MissionBlock type="main" lng={lng} />,
    <CategoriesSection title={t('choose.category')} titleAlign="center" />,
    <HomeHistoryBlock lng={lng} />,
    <AuthorList lng={lng} />,
    <BrandsBlock lng={lng} />,
    <TestimonialsBlock lng={lng} />,
    <JoinBlock lng={lng} />,
  ];

  const [blocks, setBlocks] = useState(components.slice(0, 2));

  const handleScroll = () => {
    const footerHeight = document.getElementById('footer')?.clientHeight!;
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 200 - footerHeight
    ) {
      const nextBlock = components[blocks.length];
      setBlocks([...blocks, nextBlock]);
    }
  };

  useEffect(() => {
    if (blocks.length !== components.length) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    return () => {};
  }, [blocks]);

  return (
    <>
      {blocks.map((block) => (
        <Fragment key={block.type.name}>{block}</Fragment>
      ))}
      ;
    </>
  );
};

export default Home;
