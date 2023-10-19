# API data fields

In this table you can find the fields of the different API versions, extra information and sources. 

| field                        | Info | 中文 | 範例 - Taiwan |
|------------------------------|------|-----|---------------|
| altSpellings                 | Alternate spellings of the country name | 國家名稱的替代拼寫 | ['TW', 'Táiwān', 'Republic of China', '中華民國', 'Zhōnghuá Mínguó', 'Chinese Taipei'] |
| area                         | Geographical size | 地理規模 | 36193.0 |
| borders                      | Border countries | 邊境國家 |  |
| capital                      | Capital cities | 首都 | Taipei |
| capitalInfo > latlng         | Capital latitude and longitude | 首都緯度和經度 | [25.03, 121.52] |
| car > signs                  | Car distinguised (oval) signs | 汽車識別（橢圓形）標誌 | ["RC"] |
| car > side                   | Car driving side | 汽車駕駛側 | right |
| cca2                         | ISO 3166-1 alpha-2 two-letter country codes | ISO 3166-1 二位字母國家／地區代碼，目前應用最廣泛的國家／地區代碼，適用於通常情況 | TW |
| cca3                         | ISO 3166-1 alpha-3 three-letter country codes | ISO 3166-1 三位字母國家／地區代碼，較接近國家英語名稱 | TWN |
| ccn3                         | ISO 3166-1 numeric code (UN M49) | ISO 3166-1 數字國家／地區代碼，適用於非拉丁字母環境 | 158 |
| cioc                         | Code of the International Olympic Committee | 國際奧林匹克委員會國家／地區編碼 | TPE |
| coatOfArms                   | [MainFacts.com](https://mainfacts.com/coat-of-arms-countries-world) links to svg and png images | MainFacts.com 網站提供的國徽 svg 和 png 圖檔連結 | { "png": "https://mainfacts.com/media/images/coats_of_arms/tw.png", "svg": "https://mainfacts.com/media/images/coats_of_arms/tw.svg" } |
| continents                   | List of continents the country is on | 國家所在洲別的列表 | ["Asia"] |
| currencies                   | List of all currencies | 所有貨幣列表 | { TWD: { name: 'New Taiwan dollar', symbol: '$' } } |
| demonym                      | Inhabitants of the country | 居民稱謂 | { "eng": { "f": "Taiwanese", "m": "Taiwanese" }, "fra": { "f": "Taïwanaise", "m": "Taïwanais" } } |
| demonyms (m/f)               | Genderized inhabitants of the country | 居民稱謂（m 男性／f 女性） |
| idd                          | International dialing codes | 國際撥號代碼 | { root: '+8', suffixes: ['86'] } |
| independent                  | ISO 3166-1 independence status (the country is considered a sovereign state) | ISO 3166 上標為獨立主權 | false |
| fifa                         | FIFA code | 國際足聯編碼 | TPE |
| flag                         | flag emoji | 國旗表情符號 | 🇹🇼 |
| flags                        | [Flagpedia](https://flagpedia.net/) links to svg and png flags | Flagpedia 網站提供的國旗 svg 和 png 圖檔連結 | { "png": "https://flagcdn.com/w320/tw.png", "svg": "https://flagcdn.com/tw.svg" }|
| gini                         | Worldbank [Gini](https://data.worldbank.org/indicator/SI.POV.GINI) index           | 世界銀行吉尼指數 |  |
| landlocked                   | Landlocked country | 內陸國家 | false |
| languages                    | List of official languages | 官方語言列表 | {zho: 'Chinese'} |
| latlng                       | Latitude and longitude | 緯度和經度 | [23.5, 121.0] |
| maps                         | Link to Google maps and Open Street maps | Google 地圖和 Open Street 地圖連結 | { "googleMaps": "https://goo.gl/maps/HgMKFQjNadF3Wa6B6", "openStreetMaps": "https://www.openstreetmap.org/relation/449220" } |
| name                         | Country name | 國名 - 英文 |  |
| name > common                | Common country name | 通用國名 - 英文 | Taiwan |
| name > official              | Official country name | 官方國名 - 英文 | Republic of China (Taiwan)" |
| name > nativeName            | Native country name | 國名 - 該國官方語言 | { 'zho': { official": '中華民國', common: '台灣' } } |
| name > nativeName > common   | Common native country name | 通用國名 - 該國官方語言 | 台灣 |
| name > nativeName > official | Official native country name | 官方國名 - 該國官方語言 | 中華民國 |
| population                   | Country population | 國家人口 | 23503349 |
| postalCodes > format         | Country postal codes | 國家郵政編碼 | ##### |
| postalCodes > regex          | Country postal codes | 國家郵政編碼 | "^(\\d{5})$" |
| region                       | UN [demographic regions](https://unstats.un.org/unsd/methodology/m49/) | 聯合國人口統計區域 | Asia |
| startOfWeek                  | Day of the start of week (Sunday/Monday) | 一周的開始日（星期日/星期一） | monday |
| status                       | ISO 3166-1 assignment status | ISO 3166-1 分配狀態 | officially-assigned |
| subregion                    | UN [demographic subregions](https://unstats.un.org/unsd/methodology/m49/) | 聯合國人口次區域 | Eastern Asia |
| timezones                    | Timezones | 時區 | ["UTC+08:00"] |
| tld                          | Internet top level domains | 網域頂級域名 | ['.tw', '.台灣', '.台湾'] |
| translations                 | List of country name translations | 國名翻譯列表 | { 語言: { common: 'xxx', official: 'xxx'}, ... } |
| unMember                     | UN Member status | 聯合國會員國地位 | false |
