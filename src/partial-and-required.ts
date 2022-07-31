export {};

type Profile = {
  name: string;
  age?: number;
};

// 追加しても動的にオプショナルな型設定をできる
type PartialType = Partial<Profile>

// 全てが必須の型設定にすることが可能
type RequiredType = Required<Partial>