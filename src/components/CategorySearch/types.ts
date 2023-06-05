export interface CategorySearchProps {
  category: string;
  handleClick: (tag: string) => () => void;
  selectedTags: string[];
}
