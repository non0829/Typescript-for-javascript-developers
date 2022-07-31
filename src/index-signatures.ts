export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  // インデックスシグネチャーの使い方、後から追加する項目に対しても型宣言を可能にする
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: "shota",
  underTwenty: false,
};

// How to write index signature
// { [ index: typeForIndex ]: typeForValue }

profile.name = "Ham";
profile.age = 30;
profile.nationality = "Japan";