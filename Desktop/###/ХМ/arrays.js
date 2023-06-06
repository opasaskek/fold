const tours = [
    { name: 'Alaskan Wilderness Expedition', desription:'Immerse yourself in the rugged beauty of Alaska, a land of towering mountains, pristine glaciers, and lush forests. Explore untouched wilderness, witness awe-inspiring wildlife, and experience unforgettable adventures.', price: 1400, duration: '2 week'},
    { name: 'Enigmatic Egyptian Odyssey', desription: 'Uncover the mysteries of ancient Egypt, from the iconic pyramids and Sphinx to the bustling markets and vibrant cities along the Nile River. Delve into the history, art, and culture that have captivated the world for millennia.', price:2500, duration:'1,5 week'},
    { name: 'Scenic New Zealand Adventure', desription: 'Traverse the stunning landscapes of New Zealand, from the lush rainforests and pristine beaches to the dramatic mountains and glaciers. Experience the adventure and natural beauty that make this destination truly unique.', price: 1500, duration: '1 week'},
    { name: ' Mystical Machu Picchu Trek', desription: 'Venture deep into the heart of the Andes, where you will uncover the ancient secrets of Machu Picchu, the lost city of the Incas. Hike through breathtaking landscapes and immerse yourself in the rich history and culture of Peru.', price: 2300, duration: '4 week'},
    { name: 'Vibrant Rio de Janeiro Carnival', desription: ' Experience the energy and excitement of Rio de Janeiros world-famous Carnival, where colorful parades, pulsating samba rhythms, and lively street parties come together in a dazzling celebration of life.', price: 1800, duration:'2 week'},
    { name: ' Majestic African Safari', desription: 'Embark on a thrilling journey through the African wilderness, where you will encounter diverse wildlife, breathtaking landscapes, and vibrant cultures. Discover the untamed beauty of the African savanna.', price: 2100, duration: '4 days'}
];

function filterToursByMaxCost(maxPrice) {
    const filteredTours = tours.filter(tour => tour.price <= maxPrice);
    return filteredTours;
  }
  
  const maxPrice = 2500;
  const filteredTours = filterToursByMaxCost(maxPrice);
  console.log(filteredTours);
  
  function sortToursByName() {
    const sortedTours = tours.sort((a, b) => a.name.localeCompare(b.name));
    return sortedTours;
  }
  
  const sortedTours = sortToursByName();
  console.log(sortedTours);