const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return menu._courses.appetizers;    
  },
  get mains() {
    return menu._courses.mains;    
  },
  get desserts() {
    return menu._courses.desserts;    
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers = appetizerIn;    
  },
	set mains(mainsIn) {
    this._courses.appetizers = mainsIn;    
  },
  set desserts(dessertsIn) {
    this._courses.appetizers = dessertsIn;    
  },
  get courses() {
    	return {
      	appetizers: this.appetizers,
      	mains: this.mains, 
      	desserts: this.desserts
    	}
  	},
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = { 
      name: dishName, 
      price: dishPrice 
    };
		this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = `$${appetizer.price + main.price + dessert.price}`
    const selection = `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. Price: ${totalPrice}`;
    return selection;
  }
};

menu.addDishToCourse('appetizers', 'hummus', 1.50);
menu.addDishToCourse('appetizers', 'falafel', 1.50);
menu.addDishToCourse('appetizers', 'tabouli', 1.50);

menu.addDishToCourse('mains', 'kebab', 9.00);
menu.addDishToCourse('mains', 'gyro', 9.00);
menu.addDishToCourse('mains', 'lamb shanks', 9.00);

menu.addDishToCourse('desserts', 'cake', 2.00);
menu.addDishToCourse('desserts', 'shake', 2.00);
menu.addDishToCourse('desserts', 'sundae', 2.00);

const meal = menu.generateRandomMeal();

console.log(meal);