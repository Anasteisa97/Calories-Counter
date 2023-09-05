import { createContext, Dispatch, SetStateAction } from "react";

type RightScreen = {
  isRightScreenVisible: boolean;
  setRightScreenVisible: Dispatch<SetStateAction<boolean>>;
};

type SearchActive = {
  isSearchActive: boolean;
  setSearchActive: Dispatch<SetStateAction<boolean>>;
};

export const RightScreenContext = createContext<RightScreen>({
  isRightScreenVisible: false,
  setRightScreenVisible: () => {},
});
export const SearchActiveContext = createContext<SearchActive>({
  isSearchActive: true,
  setSearchActive: () => {},
});
