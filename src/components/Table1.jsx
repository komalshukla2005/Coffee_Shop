import React, { useState } from 'react'
import './Table.css'
const TableImages = [
  { Price: 900, Image: "https://lovechicliving.co.uk/wp-content/uploads/2023/10/christmas-coffee-table-decor.jpg" },
  { Price: 1200, Image: "https://cms.interiorcompany.com/wp-content/uploads/2024/03/reflective-accents-dining-table-decor-ideas.jpg" },
  { Price: 1800, Image: "https://i.pinimg.com/736x/6c/ba/38/6cba38d4c4bc31005a17fa882a17ae88.jpg" },
  { Price: 2500, Image: "https://interiorstylehunter.com/wp-content/uploads/2023/11/A-close-up-image-of-an-arrangement-of-elegant-decorative-items-on-a-surface.-The-composition-includes-a-crystal-candle-holder-with-a-lit-scented-candl.png" },
  { Price: 3200, Image: "https://i.pinimg.com/736x/0b/64/90/0b6490f907f1d25c237657743033613f.jpg" },
  { Price: 3900, Image: "https://www.wakefit.co/blog/wp-content/uploads/2022/01/Flowery-Reception-min-683x1024.jpg" },
  { Price: 4500, Image: "https://www.wakefit.co/blog/wp-content/uploads/2022/01/Lights-min-683x1024.jpg" },
  { Price: 5200, Image: "https://img.freepik.com/free-photo/close-up-hands-holding-cup-cookie_23-2149180933.jpg" },
  { Price: 5900, Image: "https://cdn.prod.website-files.com/5f11de68bba9107d2be668e0/650b62bd90f6c12a5f84ad13_person-holding-mug-marshmallows-candy-cane-christmas-tree.jpg" },
  { Price: 6400, Image: "https://answeredfaith.com/wp-content/uploads/2024/08/bible-study-christmas-party-ideas.jpg" },
  { Price: 7000, Image: "https://interiorstylehunter.com/wp-content/uploads/2023/11/Functional_Yet_Stylish_Trays.png" },
  { Price: 7500, Image: "https://interiorstylehunter.com/wp-content/uploads/2023/11/A_coffee_table_with_a_well-chosen_scented_candle.png" },
  { Price: 8100, Image: "https://i.pinimg.com/736x/fa/02/a3/fa02a3b045830249dac8e28534334216.jpg" },
  { Price: 8600, Image: "https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/ambient%20light%20for%20restaurant%20interior.jpg" },
  { Price: 9000, Image: "https://i.pinimg.com/originals/9c/be/eb/9cbeebdd98a6e4e895d6d84e2bae5f0c.jpg" },
  { Price: 950, Image: "https://www.restaurantinteriordesign.eu/wp-content/uploads/2022/03/Elegant-Restaurant-Decor-by-Joyce-Wang.jpg" },
  { Price: 1400, Image: "https://static.dezeen.com/uploads/2016/08/dennis-lo-rhoda-restaurant-joyce-wang-studio-hong-kong-interior-design_dezeen_3408_5-1704x1136.jpg" },
  { Price: 2100, Image: "https://image.architonic.com/imgArc/project-1/4/5207771/joyce-wang-rhoda-architonic-lit-20160607-rhoda-highres-0038-09.jpg" },
  { Price: 2700, Image: "https://i.ytimg.com/vi/SD0q1zcIoBg/maxresdefault.jpg" },
  { Price: 3300, Image: "https://i.pinimg.com/736x/ec/68/70/ec687099a57879d6650e7496c40f013c.jpg" }
];

function Table1() {
  const [cPage, setCPage] = useState(1);

  const [selectedTable, setSelectedTable] = useState(null);
  const [popup, setPopup] = useState(null);
  const [tables, setTables] = useState(TableImages);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(tables.length / itemsPerPage);
  const startIndex = (cPage - 1) * itemsPerPage;
  const currentItems = tables.slice(startIndex, startIndex + itemsPerPage);

  const handalNext = () => {
    if (cPage < totalPages) {
      setCPage(cPage + 1);
    }
  };

  const handalPrevious = () => {
    if (cPage > 1) {
      setCPage(cPage - 1);
    }
  };

  const handleBookTable = (table) => {
    setSelectedTable(table);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const people = Number(event.target.people.value);
    const day = event.target.day.value;
    const hours = Number(event.target.hours.value);

    const totalPrice = people * selectedTable.Price;

    setPopup({
      message: `Congratulations! You booked a table for ${people} people on ${day} for ${hours} hours. Total Price: ₹${totalPrice}.`,
    });

    setTimeout(() => {
      setPopup(null);
    }, 5000);

    // Update table booking status
    setTables((prevTables) =>
      prevTables.map((table) =>
        table.Image === selectedTable.Image ? { ...table, isBooked: true } : table
      )
    );

    setSelectedTable(null);
  };

  return (
    <div>
      <div className="main_Container">
        {currentItems.map((table, index) => (
          <div key={index} className="table_cards">
            <img src={table.Image} alt="Table" />
            <div className="give_Flex">
              <p>Price: ₹{table.Price}</p>
              <button
                onClick={() => handleBookTable(table)}
                style={{
                  backgroundColor: table.isBooked ? 'green' : '',
                  color: table.isBooked ? 'white' : '',
                }}
                disabled={table.isBooked}
              >
                {table.isBooked ? 'You Booked Table' : 'Book The Table'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handalPrevious} disabled={cPage === 1}>
          Previous
        </button>
        <span className="page-indicator">
          Page {cPage} of {totalPages}
        </span>
        <button onClick={handalNext} disabled={cPage === totalPages}>
          Next
        </button>
      </div>

      {/* Booking Form */}
      {selectedTable && (
        <div className="booking-form">
          <h3>Book Your Table</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Number of People:
              <input type="number" name="people" min="1"  max="10" required />
            </label>
            <label>
              Day:
              <input type="date" name="day" required />
            </label>
            <label>
              Duration (hours):
              <input type="number" name="hours" min="1" required />
            </label>
            <button type="submit">Confirm Booking</button>
          </form>
        </div>
      )}

      {/* Popup Message */}
      {popup && (
        <div className="popup">
          <p>{popup.message}</p>
          <p>Enjoy your day 😊</p>
        </div>
      )}
    </div>
  );
}

export default Table1;