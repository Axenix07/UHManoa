/* eslint-disable */ 
class MenuItem {
  public itemName: string;

  public ingredients: string[];

  public prices: number[];

  public calories: number[];

  constructor(
    name: string,
    ingredients: string[],
    prices: number[],
    calories: number[],
  ) {
    this.itemName = name;
    this.ingredients = ingredients;
    this.prices = prices;
    this.calories = calories;
  }
}

class Menu {
  public menuItems: MenuItem[];

  constructor(menuItems: MenuItem[]) {
    this.menuItems = menuItems;
  }

  addMenuItem(item: MenuItem): boolean {
    this.menuItems.push(item);
    return true;
  }

  findMenuItems(item: string): MenuItem[] {
    const foundItems: MenuItem[] = [];
    for (let i = 0; i < this.menuItems.length; i++) {
      for (let j = 0; j < this.menuItems[i].ingredients.length; j++) {
        if (this.menuItems[i].ingredients[j].toLowerCase == item.toLowerCase) {
          foundItems.push(this.menuItems[i]);
        }
      }
    }
    return foundItems;
  }
}

const papayaSunrise = new MenuItem(
  'PapayaSunrise',
  ['Papaya', 'Strawberry', 'Peach'],
  [5.15, 5.75, 6.55],
  [190, 280, 330],
);
const peachPerfection = new MenuItem(
  'PeachPerfection',
  ['Peach', 'Mango', 'Strawberry'],
  [5.15, 5.75, 6.55],
  [210, 320, 360],
);
const strawberryDragon = new MenuItem(
  'StrawberryDragon',
  ['Pitaya', 'Strawberry', 'Orange', 'Passionfruit', 'Mango', 'Banana'],
  [5.15, 5.75, 6.55],
  [360, 480, 610],
);
const strawberryWhirl = new MenuItem(
  'StrawberryWhirl',
  ['Strawberry', 'Banana', 'Apple'],
  [5.15, 5.75, 6.55],
  [210, 310, 380],
);

const menu = new Menu([
  papayaSunrise,
  peachPerfection,
  strawberryDragon,
  strawberryWhirl,
]);

enum SizeIndex {
  small = 0,
  medium = 1,
  large = 2,
}

class Drink {
  public menuItem: MenuItem;

  public price: number;

  public calories: number;

  constructor(menuItem: MenuItem, size: 'small' | 'medium' | 'large') {
    const index = SizeIndex[size];
    this.menuItem = menuItem;
    this.price = menuItem.prices[index];
    this.calories = menuItem.calories[index];
  }
}

class Order {
  private drinks: Drink[] = [];

  public orderDrink(drink: Drink): void {
    this.drinks.push(drink);
  }

  public totalCost(): number {
    return this.drinks.reduce((total, drink) => total + drink.price, 0);
  }
}

const myLargePapaya = new Drink(papayaSunrise, 'large'); // Should be $6.55, 330 cal
const mySmallPeach = new Drink(peachPerfection, 'small'); // Should be $5.15, 210 cal

const myOrder = new Order();
myOrder.orderDrink(myLargePapaya);
myOrder.orderDrink(mySmallPeach);

const total = myOrder.totalCost();
console.log(`Total Order Cost: $${total.toFixed(2)}`);
// Expected: 6.55 + 5.15 = 11.70

console.log(menu);
