let cars = [{ brand: "Jeep", model: "Compass", price: 2500000, color: 'white' },
{ brand: "Tata", model: "Nexon", price: 1200000, color: 'red' },
{ brand: "Jeep", model: "Wrangler", price: 6500000, color: 'black' },
{ brand: "Mahindra", model: "Thar", price: 1900000, color: 'blue' },
{ brand: "BMW", model: "X1", price: 5000000, color: 'black' },
{ brand: "VW", model: "Polo", price: 1000000, color: 'gray' },
{ brand: "Maruthi", model: "Alto 800", price: 400000, color: 'no color' },
{ brand: "Totoya", model: "Innova", price: 4500000, color: 'silver' }]

let new_cars=cars.filter((cars)=>{
    return cars.color=="white" && cars.price>2000000
})
console.log(new_cars);