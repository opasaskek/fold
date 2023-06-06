//1
let tour = {
    name: 'Mystical Bali Adventure',
    description: 'Explore the enchanting island of Bali, with its lush jungles, vibrant culture, and ancient temples. Visit the iconic Tanah Lot temple, hike to the summit of Mount Batur, and unwind on the pristine beaches of Nusa Dua.',
    price: '7,168.09 UAH',
    duration: 'One week'
};

function displayInfo(tour) {
    console.log('Name:', tour.name);
    console.log('Description:', tour.description);
    console.log('Price:', tour.price);
    console.log('Duration:', tour.duration);
}

displayInfo(tour);

//2
function calculateTotalCost(tour, countOfTravelers) {
    let totalPrice = parseFloat(tour.price) * countOfTravelers;
    console.log('Total Cost:', totalPrice.toFixed(2), 'UAH');
    
}

calculateTotalCost(tour, 5);