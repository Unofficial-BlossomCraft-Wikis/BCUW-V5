"use client";

import type React from "react";
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface TitleData {
  title: string;
  tags?: {
    UGC?: boolean;
    stub?: boolean;
    item?: boolean;
    crate?: boolean;
    itemTags?: {
      magicInfinite?: boolean;
      weapon?: boolean;
      armor?: boolean;
      consumable?: boolean;
      tool?: boolean;
      key?: boolean;
      other?: boolean;
      common?: boolean;
      uncommon?: boolean;
      rare?: boolean;
      epic?: boolean;
      legendary?: boolean;
    };
    crateTags?: {
      infinite?: boolean;
      season?: boolean;
      lt?: boolean;
      holiday?: boolean;
      other?: boolean;
    };
    userTags?: {
      verified?: boolean;
      bcStaff?: {
        helper?: boolean;
        moderator?: boolean;
        seniorModerator?: boolean; // Also known as "Community Mentor"
        managers?: boolean;
        admin?: boolean;
      };
      bcuwStaff?: {
        helper?: boolean;
        moderator?: boolean;
        admin?: boolean;
      };
			serverTags?: {
				cherry?: boolean;
				spirit?: boolean;
				lotus?: boolean;
				tulip?: boolean;
			};
			roleTags?: {
				celestial?: boolean;
				immortal?: boolean;
				emperor?: boolean;
				shogun?: boolean;
				samurai?: boolean;
				pancake?: boolean;
			};
    };
  };
  icon?: string;
  itemIcon?: string;
}

interface TitleContextType {
  titleData: TitleData;
  setTitleData: (data: TitleData) => void;
}

const TitleContext = createContext<TitleContextType | undefined>(undefined);

export const TitleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [titleData, setTitleData] = useState<TitleData>({
    title: "",
  });

  return (
    <TitleContext.Provider value={{ titleData, setTitleData }}>
      {children}
    </TitleContext.Provider>
  );
};

/**
 *
 * @returns The current title data
 * @throws {Error} If the TitleProvider is not used within the component tree
 */
export const useTitleData = (): TitleContextType => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error("usePageData must be used within a TitleProvider");
  }
  return context;
};

interface TitleDataUpdaterProps {
  data: TitleData;
}

export function TitleDataUpdater({ data }: TitleDataUpdaterProps) {
  const { setTitleData } = useTitleData();

  useEffect(() => {
    setTitleData(data);
  }, [data, setTitleData]);

  return null;
}
