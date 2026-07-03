import { createContext } from "react";

export const PortfolioContext = createContext({
  tab: "",
  setTab: () => {},
});
