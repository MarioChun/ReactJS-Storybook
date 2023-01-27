export interface Coffee {
  title: string;
  type: string;
  description: string;
  ingredients: Array<string>;
  image: string;
  id: number;
}
//https://sampleapis.com/api-list/coffee
const CoffeeData: Coffee[] = [
  {
    title: "Iced Coffee",
    type: "iced",
    description:
      "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.",
    ingredients: ["Coffee", "Ice", "Sugar*", "Cream*"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg",
    id: 1,
  },
  {
    title: "Iced Espresso",
    type: "iced",
    description:
      "Like an iced coffee, iced espresso can be served straight or with a dash of milk, cream or sweetener. You can also ice speciality espresso-based drinks like americanos, mochas, macchiatos, lattes and flat whites.",
    ingredients: ["Espresso", "Ice", "Sugar*", "Cream*"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/Home_Made_Ice_Coffee.jpg",
    id: 2,
  },
  {
    title: "Cold Brew",
    type: "iced",
    description:
      "The trendiest of the iced coffee bunch, cold brew coffees are made by steeping coffee beans from anywhere between 6-36 hours, depending on how strong you would like your cold brew. Once the beans are done steeping, add cold milk or cream.",
    ingredients: ["Long steeped coffee", "Ice"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ColdBrewCoffeein_Cans.png/640px-ColdBrewCoffeein_Cans.png",
    id: 3,
  },
  {
    title: "Frappuccino",
    type: "hot",
    description:
      "Made famous by Starbucks, the Frappuccino is a blended iced coffee drink that’s topped with whipped cream and syrup. ",
    ingredients: ["Espresso", "Blended ice", "Whip*"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Strawberry_Delight_Frappuccino.JPG",
    id: 4,
  },
  {
    title: "Nitro",
    type: "hot",
    description:
      "A cold brew + nitrogen bubbles = a cold brew coffee with a frothy, Guinness-like consistency. (It’s poured via a nitro tap, too.)",
    ingredients: ["Coffee", "Nitrogen bubbles", "Sugar*", "Cream*"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Nitro_Cold_Brew.jpg",
    id: 5,
  },
  {
    title: "Mazagran",
    type: "hot",
    description:
      "Mazagran coffee is a cross between iced coffee, tea and your favorite rum drink. It typically consists of espresso, lemon, sugar and (sometimes) rum.",
    ingredients: ["Coffee", "Sugar", "Lemon", "Rum*"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Caf%C3%A9_mazagran.jpg",
    id: 6,
  },
];

export default {
  select: () => {
    return CoffeeData;
  },
  selectByid: (id: number) => {
    return CoffeeData.filter((item) => item.id === id);
  },
  selectByName: (name: string) => {
    return CoffeeData.filter((item) => item.title.includes(name));
  },
  selectByType: (type: string) => {
    return CoffeeData.filter((item) => item.type.includes(type));
  },
};
