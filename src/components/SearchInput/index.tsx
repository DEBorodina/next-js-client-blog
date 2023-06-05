'use client';

import React, { useState } from 'react';

import tagsList from '@data/tags.json';

import { usePopup } from '@/hooks';
import { checkStringMatch } from '@/utils/checkStringsMatch';

import styles from './styles.module.scss';
import { SearchInputProps } from './types';

const SearchInput: React.FC<SearchInputProps> = ({ addTag }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [value, setValue] = useState('');

  const [popUp, isOpen, setOpen] = usePopup();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpen(true);

    const newValue = event.target.value;
    setValue(newValue);

    if (newValue) {
      const newTags = tagsList.filter((tag) => checkStringMatch(newValue, tag));
      setTags(newTags);
    } else {
      setTags([]);
      setOpen(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleClick = (tag: string) => () => {
    addTag(tag)();
    setOpen(false);
    setValue(tag);
  };

  return (
    <form
      className={styles.search}
      ref={popUp as React.RefObject<HTMLFormElement>}
      onSubmit={handleSubmit}
    >
      <input
        className={styles.search__input}
        value={value}
        onChange={handleChange}
        placeholder="Search for tag..."
      />
      <button className={styles.search__button} type="submit">
        Search
      </button>
      {isOpen && (
        <ul className={styles.list}>
          {tags.length > 0 ? (
            tags.map((tag) => (
              <li
                className={styles.list__item}
                key={tag}
                onClick={handleClick(tag)}
              >
                {tag}
              </li>
            ))
          ) : (
            <li className={styles.list__item}> No tags found </li>
          )}
        </ul>
      )}
    </form>
  );
};

export default SearchInput;
