export {};

type DetailedProfile = {
  name: string;
  height: number; 
  weight: number;
}

// 元にあるタイプから選択することができる
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// ある特定の型を除外して新しい型を設定する

type SmallProfile = Omit<DetailedProfile, 'height'>;