const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//the order inside of tuples tend to have specific meaning so
//it may not be desirable to reorder the items inside of them

//instead of instantiating the tuple in its declaration, the
//"type" creates the idea of a tuple and instantiates it
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];

//can annotate in order to specify the specific order of a tuple
//which may not be changed
