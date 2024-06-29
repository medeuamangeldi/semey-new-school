import { commonRu } from "../../../locales/en/common";

export const t = (key: string, locale: string) => {
  switch (locale) {
    default:
      return commonRu[key];
  }
};
