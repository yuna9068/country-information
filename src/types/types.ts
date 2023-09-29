interface CountryNameInLang {
  [lang: string]: {
    official: string;
    common: string;
  }
}

interface CountryName {
  common: string;
  official: string;
  nativeName?: CountryNameInLang;
}

interface Currency {
  [key: string]: {
    name: string;
    symbol: string;
  }
}

interface Idd {
  root?: string;
  suffixes?: string[];
}

interface Language {
  [lang: string]: string;
}

interface Demonym {
  [lang: string]: {
    f: string;
    m: string;
  }
}

interface Map {
  googleMaps: string;
  openStreetMaps: string;
}

interface Gini {
  [year: string]: number;
}

interface Car {
  signs: string[];
  side: string;
}

interface Picture {
  png?: string;
  svg?: string;
  alt?: string;
}

interface CapitalInfo {
  latlng?: number[];
}

interface PostalCode {
  format: string;
  regex: string;
}

export interface Country {
  name: CountryName;
  tld: string[],
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies?: Currency;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: Language;
  translations: CountryNameInLang;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonym;
  flag: string;
  maps: Map;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Picture;
  coatOfArms: Picture;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface FilterRegion {
  name: string | null;
  value: string | null;
}

export type ThemeName = 'light' | 'dark';
