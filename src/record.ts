export {};

// Record<K, T>

type Prefectures = "Tokyo" | "Chiba" | "Tottori" | "Shiga";

type Covid19 = {
  kanji_name: string;
  confirmed_cased: number;
}

const covid19Japan: Record<Prefectures, Covid19> = {
  Tokyo: { kanji_name: "東京", confirmed_cased: 1900 },
  Chiba: { kanji_name: "千葉", confirmed_cased: 190 },
  Tottori: { kanji_name: "鳥取", confirmed_cased: 1 },
  Shiga: { kanji_name: "滋賀", confirmed_cased: 29 },
}