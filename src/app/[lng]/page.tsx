'use client';

import React, { Fragment, useEffect, useState } from 'react';

import AuthorList from '@/components/AuthorsList';
import BrandsBlock from '@/components/BrandsBlock';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedPostsBlock from '@/components/FeaturedPostsBlock';
import HomeHeader from '@/components/HomeHeader';
import HomeHistoryBlock from '@/components/HomeHistoryBlock';
import JoinBlock from '@/components/JoinBlock';
import MissionBlock from '@/components/MissionBlock';
import TestimonialsBlock from '@/components/TestimonialsBlock';

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
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 600
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
