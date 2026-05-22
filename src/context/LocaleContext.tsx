import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { getPortfolioContent, type PortfolioContent } from "../data";

interface PortfolioContextValue {
  content: PortfolioContent;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const content = useMemo(() => getPortfolioContent(), []);

  useEffect(() => {
    document.documentElement.lang = "en";
    document.title = content.meta.title;
  }, [content.meta.title]);

  return (
    <PortfolioContext.Provider value={{ content }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used within LocaleProvider");
  }
  return ctx;
}
