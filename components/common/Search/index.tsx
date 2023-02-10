import type { KeyboardEvent, MouseEvent, RefObject } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { SearchContainer, SearchInput } from './styles';

interface Props {
  mode: string;
  searchRef: RefObject<HTMLInputElement>;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement> & MouseEvent) => void;
  onSearch: (e: MouseEvent) => void;
}

export default function Search({ ...rest }: Props) {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        name="search"
        ref={rest.searchRef}
        onKeyPress={rest.onKeyPress}
        placeholder={`${rest.mode} 검색`}
      />

      <a onClick={rest.onSearch}>
        <BiSearchAlt />
      </a>
    </SearchContainer>
  );
}
