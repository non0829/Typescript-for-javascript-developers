export {};

type Pitcher1 = {
  speed: number;
};

type Batter1 = {
  average: number;
}

const Sasaki: Pitcher1 = {
  speed: 154,
};

const Ochiai: Batter1 = {
  average: 0.367,
}

type Twoway = Pitcher1 & Batter1;

const Ootani: Twoway = {
  speed: 165,
  average: 0.286,
};