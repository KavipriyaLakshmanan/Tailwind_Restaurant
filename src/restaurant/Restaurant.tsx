import sandwhich from "./sandwhich.jpeg";
import egg from "./egg.jpeg";
import { useState } from "react";
type ItemType = {
  name: string;
  image: string;
  description: string;
};
const list = [
  {
    name: "chicken",
    image:
      "https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-005.jpg",
    description:
      "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together",
  },
  {
    name: "bread pizza",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/bread-pizza.jpg",

    description:
      "Pizza bread is an open-faced sandwich made of bread, tomato sauce, cheese, and various toppings.",
  },
  {
    name: "sandwich",
    image: sandwhich,
    description:
      " food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread.",
  },
  {
    name: "egg recipes",
    image: egg,
    description:
      "Egg recipes are versatile and delicious. Explore different ways to cook eggs for a tasty and nutritious meal.",
  },
  {
    name: "curd rice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhWcN1xn0UtppvmGDJlf79Ayg0YZlvEcvosVFZNgjZLzhvm_s2FixokkB3uFH-FRxeA8&usqp=CAU",
    description:
      "Curd Rice is a South Indian dish made with cooked rice and yogurt, usually seasoned with mustard, urad dal, and curry leaves.",
  },
  {
    name: "kuska",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/06/kuska.jpg",

    description:
      "Pizza bread is an open-faced sandwich made of bread, tomato sauce, cheese, and various toppings.",
  },
];

const Restaurant = () => {
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (item: ItemType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-wrap justify-center gap-6 p-10">
      {list.map((item, index) => (
        <div
          key={index}
          className="shadow-lg w-1/4 p-2 flex flex-col leading-5 items-center justify-center"
        >
          <img
            src={item.image}
            alt="image"
            className="object-cover w-full h-48  hover:scale-105  ease-in rounded"
          />
          <h1 className="font-black	">{item.name}</h1>
          <p>{item.description}</p>
          <button
            className="bg-blue-300 p-2 hover:bg-green-500 rounded items-center	"
            onClick={() => openModal(item)}
          >
            view
          </button>
        </div>
      ))}
      {selectedItem && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
            isModalOpen ? "visible" : "invisible"
          }`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
          <div className="relative bg-white p-14 rounded-lg z-10 p-10">
            <div className="p-2">
              <h1 className="text-2xl font-black">{selectedItem.name}</h1>
              <p>{selectedItem.description}</p>
            </div>
            <button
              className="bg-blue-300 p-2 hover:bg-green-500 rounded absolute right-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
