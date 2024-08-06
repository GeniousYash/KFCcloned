/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const MenuPage = () => {
  const menuData = [
    {
      category: "International Burger Fest",
      items: [
        {
          name: "Mexican Zinger Pro Burger",
          description: "New premium zinger with crunchy zinger",
          price: "₹219.05",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K695.jpg?ver=49.79",
          type: "Non veg",
        },
        {
          name: "Indian Tandoori Zinger Burger",
          description: "Grab Tandoori Zinger Burger with Onions & Tangy sauce",
          price: "₹318.10",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K540.jpg?ver=49.79",
          type: "Non veg",
        },
        {
          name: "Indian Tandoori Zinger Meal",
          description: "Grab the Tandoori Zinger Burger Meal",
          price: "₹318.10",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000995.jpg?ver=49.79",
          type: "Non veg",
        },
        {
          name: "American Classic Zinger Burger",
          description: "New premium cheese, lettuce, tomato filled Zinger burger",
          price: "₹318.10",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K439.jpg?ver=49.79",
          type: "Non veg",
        },
        {
          name: "Caribbean Spicy Zinger Meal",
          description: "New premium cheese, lettuce, tomato filled Zinger burger",
          price: "₹318.10",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002411.jpg?ver=49.79",
          type: "Non veg",
        },
        {
          name: "Indian Paneer Zinger Burger",
          description: "New premium cheese, lettuce, tomato filled Zinger burger",
          price: "₹318.10",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K912.jpg?ver=49.79",
          type: "Non veg",
        },
        {
          name: "Indian Paneer Zinger Meal",
          description: "New premium cheese, lettuce, tomato filled Zinger burger",
          price: "₹318.10",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002587.jpg?ver=49.79",
          type: "Non veg",
        },
      ],
    },
    {
      category: "KFC Lunch Specials",
      items: [
        {
          name: "Lunch Special 1",
          description: "Description for Lunch Special 1",
          price: "₹199.99",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K695.jpg?ver=49.79",
          type: "Non veg",
        },
      ],
    },
    {
      category: "BOX MEALS",
      items: [
        {
          name: "Chicken Longer Combo - Large",
          description: "32% off on the New 1 Longer + 2 HC + 1 Pepsi Lunch Special!",
          price: "₹199.99",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002521.jpg?ver=49.79",
          type: "Non veg",
        },
        {
          name: "Chicken Roll Combo - Large",
          description: "32% off on the New 1 Single Roll + 2 HC + 1 Pepsi Lunch Special!",
          price: "₹199.99",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002522.jpg?ver=49.79",
          type: "Non veg",
        },
        {
          name: "Chicken Rice Combo - Large",
          description: "37% off on the new 1 Rice + 2 HC + 1 Pepsi Lunch Special!",
          price: "₹199.99",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002523.jpg?ver=49.79",
          type: "Non veg",
        },
        {
          name: "Chicken Longer Combo - Medium",
          description: "37% off on the New 1 Longer + 1 Strips + 1 HC + 1 Pepsi Lunch Special!",
          price: "₹199.99",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002518.jpg?ver=49.79",
          type: "Non veg",
        },
        {
          name: "Chicken Roll Combo - Medium",
          description: "37% off on the New 1 Single Roll + 1 Strips + 1 HC + 1 Pepsi Lunch Special!",
          price: "₹199.99",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002519.jpg?ver=49.79",
          type: "Non veg",
        },
        {
          name: "Chicken Rice Combo - Medium",
          description: "42% off on the New 1 Rice + 1 Strips + 1 HC + 1 Pepsi Lunch Special!",
          price: "₹199.99",
          image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002520.jpg?ver=49.79",
          type: "Non veg",
        },
      ],
    },
    {
      category: "CHICKEN BUCKETS",
      items: [
          {
               name: "Chicken Longer Combo - Medium",
               description: "37% off on the New 1 Longer + 1 Strips + 1 HC + 1 Pepsi Lunch Special!",
               price: "₹199.99",
               image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000995.jpg?ver=49.79",
               type: "Non veg",
             },
             {
               name: "Chicken Roll Combo - Medium",
               description: "37% off on the New 1 Single Roll + 1 Strips + 1 HC + 1 Pepsi Lunch Special!",
               price: "₹199.99",
               image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000994.jpg?ver=49.79",
               type: "Non veg",
             },
             {
               name: "Chicken Rice Combo - Medium",
               description: "42% off on the New 1 Rice + 1 Strips + 1 HC + 1 Pepsi Lunch Special!",
               price: "₹199.99",
               image: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002150.jpg?ver=49.79",
               type: "Non veg",
             },
      ],
    },
  ];

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(menuData);
  }, []);

  const handleScrollToSection = (id) => {
    const container = document.getElementById('content-container');
    const section = document.getElementById(id);
    if (container && section) {
      const topOffset = section.offsetTop;
      container.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (

    <div className="flex h-screen mt-[100px] w-[80%] m-auto">
      {/* Sidebar */}
      <div className="w-[30%] p-6">
        <h1 className="text-2xl font-bold mb-4">KFC MENU</h1>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-2 font-national2-regular pt-[20px] text-s">
              <a
                href={`#${category.category.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleScrollToSection(
                    category.category.replace(/\s+/g, '-').toLowerCase()
                  );
                }}
                className="text-lg text-gray-700 hover:text-red-600"
              >
                {category.category.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div
        id="content-container"
        className="flex-1 p-6  overflow-auto scrollbar-hide pt-[100px]"
        style={{ height: 'calc(100vh - 2rem)' }} // Adjust height as needed
      >
      <div className='border-t-[2px] border-slate-800'></div>
        {categories.map((category, index) => (
          <section className='bg-gray-100 rounded-e'
            key={index}
            id={category.category.replace(/\s+/g, '-').toLowerCase()}
          >
            <h2 className="text-3xl font-bold mb-4 mt-[80px] p-[20px] ">
              {category.category.toUpperCase()}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="p-4 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.type}</p>
                  <p className="text-gray-800 font-bold mb-2">{item.price}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
