import React, { useState } from 'react';
import './Cards.css';
const coffeeList = [
    { id: 1, name: 'Espresso', price: '₹75', image: 'https://t4.ftcdn.net/jpg/01/62/74/67/360_F_162746788_uxm2CkE5xQq2fy7DVJASe40lMcvSQ52A.jpg' },
    { id: 2, name: 'Latte', price: '₹80', image: 'https://img.freepik.com/premium-psd/cup-coffee-with-latte-art-it_911432-45.jpg' },
    { id: 3, name: 'Cappuccino', price: '₹85', image: 'https://www.netmeds.com/images/cms/wysiwyg/blog/Post/2018/10/coffee_its_benefits_898_1_.jpg' },
    { id: 4, name: 'Mocha', price: '₹90', image: 'https://t4.ftcdn.net/jpg/06/85/03/65/360_F_685036582_QOdhu9QUVJQ2JdJJz9rhPbVLtPZ7KNNQ.jpg' },
    { id: 5, name: 'Americano', price: '₹75', image: 'https://www.mysticmonkcoffee.com/cdn/shop/articles/americano_coffee_1024x.png?v=1706611607' },
    { id: 6, name: 'Flat White', price: '₹85', image: 'https://t4.ftcdn.net/jpg/09/13/73/33/360_F_913733374_HKRPy9T44p5KjhOrlxTIQsvNaYTmnvbG.jpg' },
    { id: 7, name: 'Macchiato', price: '₹80', image: 'https://primulaproducts.com/cdn/shop/articles/MicrosoftTeams-image_777x.png?v=1721058565' },
    { id: 8, name: 'Affogato', price: '₹100', image: 'https://www.recipetineats.com/tachyon/2023/06/Affogato_1.jpg' },
    { id: 9, name: 'Cold Brew', price: '₹90', image: 'https://cdn.shopify.com/s/files/1/1616/2815/files/cold_brew_2_glasses.jpg?v=1682574244' },
    { id: 10, name: 'Turkish Coffee', price: '₹95', image: 'https://www.shutterstock.com/image-photo/traditional-turkish-coffee-cezve-prepared-600w-1132089683.jpg' },
    { id: 11, name: 'Ristretto', price: '₹85', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/7a/db/c0/caffe-ristretto.jpg?w=1200&h=-1&s=1' },
    { id: 12, name: 'Café au Lait', price: '₹80', image: 'https://www.giesen.com/wp-content/uploads/2020/12/shosuke-takahashi-f6-XQoheD50-unsplash-1024x682.jpg' },
    { id: 13, name: 'Irish Coffee', price: '₹120', image: 'https://media.gettyimages.com/id/1482586822/photo/irish-coffee-with-cream.jpg?s=612x612&w=gi&k=20&c=uDNZmWISNvkxPcGaw5XRgGuWWchVi9DneNt_yz5N5dQ=' },
    { id: 14, name: 'Nitro Coffee', price: '₹110', image: 'https://cdn.shopify.com/s/files/1/0801/7530/0936/files/Nitro-Coffee-Wildkaffee-Roesterei-Cold-Brew_1024x1024.jpg?v=1710499363' },
    { id: 15, name: 'Viennese Coffee', price: '₹95', image: 'https://www.cocinaconbra.com/cdn/shop/articles/web_CAFE_VIENES-2_copia.jpg?v=1632827068' },
    { id: 16, name: 'Lungo', price: '₹75', image: 'https://holacoffee.co.uk/wp-content/uploads/2024/07/mehmet-talha-onuk-MBeY2m00Ybc-unsplash-scaled.jpg' },
    { id: 17, name: 'Caramel Latte', price: '₹90', image: 'https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-salted-caramel-latte-1661428456.jpg' },
    { id: 18, name: 'Hazelnut Cappuccino', price: '₹100', image: 'https://static.vecteezy.com/system/resources/previews/051/201/093/non_2x/smooth-and-creamy-hazelnut-latte-with-a-handful-of-coffee-beans-all-cut-out-on-an-isolated-simple-minimalist-background-photo.jpg' },
    { id: 19, name: 'Dark Roast Coffee', price: '₹85', image: 'https://lifeboostcoffee.com/cdn/shop/articles/is_dark_roast_coffee_stronger.jpg?v=1660236124' },
    { id: 20, name: 'French Vanilla Coffee', price: '₹95', image: 'https://foodyschmoodyblog.com/wp-content/uploads/2018/06/french-vanilla-coffee.jpg' },
    { id: 21, name: 'Pumpkin Spice Latte', price: '₹110', image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/10/Pumpkin-Spice-Latte-main-1.jpg' },
    { id: 22, name: 'Espresso Con Panna', price: '₹85', image: 'https://i0.wp.com/www.teacoffeecup.com/wp-content/uploads/2020/08/classic-espresso-con-panna.jpg?fit=550%2C367&ssl=1' },
    { id: 23, name: 'White Chocolate Mocha', price: '₹120', image: 'https://marleysmenu.com/wp-content/uploads/2021/08/Iced-White-Chocolate-Mocha-Featured-Image.jpg' },
    { id: 24, name: 'Cinnamon Dolce Latte', price: '₹90', image: 'https://withsaltandwit.com/wp-content/uploads/2016/09/Homemade-Cinnamon-Dolce-Latte-2.jpg' },
];

function Cards() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(coffeeList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = coffeeList.slice(startIndex, startIndex + itemsPerPage);

    const [popup, setPopup] = useState(null); 
    const [orderedItems, setOrderedItems] = useState([]); 
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleOrder = (coffee) => {
        setPopup({ name: coffee.name, price: coffee.price });

        setOrderedItems((prev) => [...prev, coffee.id]);

        setTimeout(() => {
            setOrderedItems((prev) => prev.filter((id) => id !== coffee.id));
        }, 120000); // 2 minutes

        // Hide popup after 9 seconds
        setTimeout(() => {
            setPopup(null);
        }, 9000);
    };

    return (
        <div>
            <div className="card-container">
                {currentItems.map((coffee) => (
                    <div key={coffee.id} className="card">
                        <img src={coffee.image} alt={coffee.name} />
                        <h3>{coffee.name}</h3>
                        <div className="give_Flex">
                            <p>{coffee.price}</p>
                            <button
                                onClick={() => handleOrder(coffee)}
                                disabled={orderedItems.includes(coffee.id)}
                                className={orderedItems.includes(coffee.id) ? 'ordered' : ''}
                            >
                                {orderedItems.includes(coffee.id) ? 'Ordered' : 'Order'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                    Previous
                </button>
                <span className="page-indicator">
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNext} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>

            {popup && (
                <div className="popup">
                    <p>
                        You ordered <strong>{popup.name}</strong> for <strong>{popup.price}</strong>.
                        <br />
                        You will get your order soon 🌞! Enjoy You Day 😊 
                    </p>
                </div>
            )}
        </div>
    );
}

export default Cards;