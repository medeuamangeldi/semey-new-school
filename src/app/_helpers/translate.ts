import { commonEn } from "../../../locales/en/common";
import { commonKz } from "../../../locales/kz/common";
import { commonRu } from "../../../locales/ru/common";

export const t = (key: string, locale: string) => {
  switch (locale) {
    case "en":
      return commonEn[key];
    case "ru":
      return commonRu[key];
    case "kz":
      return commonKz[key];
    default:
      return null;
  }
};
