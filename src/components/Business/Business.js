import React from 'react';


const restaurants = [
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Charlie\'s Pizzeria',
        address: '220 Hilton Way',
        city: 'Pizza town',
        state: 'DK',
        zipCode: '8833',
        category: 'Italian',
        rating: 3.8,
        reviewCount: 121
    },
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Sushi Delight',
        address: '456 Sashimi Lane',
        city: 'Sushiville',
        state: 'TX',
        zipCode: '54321',
        category: 'Japanese',
        rating: 4.6,
        reviewCount: 80
    }, 
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Tony\'s Pasta Paradise',
        address: '123 Spaghetti Street',
        city: 'Saucetown',
        state: 'CA',
        zipCode: '98765',
        category: 'Italian',
        rating: 4.8,
        reviewCount: 120
    }, 
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Burger Barn',
        address: '789 Patty Parkway',
        city: 'Burgerburg',
        state: 'FL',
        zipCode: '12345',
        category: 'American',
        rating: 4.4,
        reviewCount: 70
    }
];

const Business = (props) => {
    return (
        <div>
            <img src={props.imageSrc} alt={props.name}/>
            <h1>{props.name}</h1>
            <p>{props.address}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.zipCode}</p>
            <p>{props.category}</p>
            <p>{props.rating} stars</p>
            <p>{props.reviewCount} reviews</p>
        </div>
    );
}; 

const RestaurantList = () => {
    return (
        <div>
            {restaurants.map((restaurant, index) => (
                <Business 
                    key={index}
                    imageSrc={restaurant.imageSrc}
                    name={restaurant.name}
                    address={restaurant.address}
                    city={restaurant.city}
                    state={restaurant.state}
                    zipCode={restaurant.zipCode}
                    category={restaurant.category}
                    rating={restaurant.rating}
                    reviewCount={restaurant.reviewCount}
                />
            ))}
        </div>
    );
};


export default RestaurantList;