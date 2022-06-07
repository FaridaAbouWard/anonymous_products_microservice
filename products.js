const products = [
    {
      "id": "9QY1OK",
      "name": "Nabat Batavia Lettuce head Green",
      "price": 26,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224008824022.JPG",
      "weight": 1,
      "measurement": "pc",
      "category": "Fruits and Vegetables",
      "stock": 0
    },
    {
      "id": "1LYDU6",
      "name": "Nabat Kale Nero",
      "price": 38.5,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224008824053.JPG",
      "weight": 100,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 19
    },
    {
      "id": "YOXL9M",
      "name": "Nabat Kale Frisee",
      "price": 38.5,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224008824206.JPG",
      "weight": 100,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 16
    },
    {
      "id": "MBE0WJ",
      "name": "Nabat Baby Green Remix",
      "price": 40,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224008824107.JPG",
      "weight": 125,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 36
    },
    {
      "id": "PGOT6W",
      "name": "Nabat Super Green",
      "price": 33,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224008824169.JPG",
      "weight": 100,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 8
    },
    {
      "id": "XLSN4R",
      "name": "Nabat Washed Baby Batavia",
      "price": 33,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224008824213.JPG",
      "weight": 100,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 49
    },
    {
      "id": "NFRNCN",
      "name": "Varny Peeled Garlic Local",
      "price": 17,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6225000442375.JPG",
      "weight": 100,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 38
    },
    {
      "id": "ZZ4YKL",
      "name": "Varny Garlic Local Net",
      "price": 17,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6225000442313.JPG",
      "weight": 200,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 37
    },
    {
      "id": "2D4LCV",
      "name": "Varny Golden Onion Net",
      "price": 16,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6225000442399.JPG",
      "weight": 2,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 0
    },
    {
      "id": "VA34F9",
      "name": "Farmers Red Cabbage",
      "price": 15,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224008266167.JPG",
      "weight": 1,
      "measurement": "pc",
      "category": "Fruits and Vegetables",
      "stock": 7
    },
    {
      "id": "8BYSPT",
      "name": "My Very Baby Potatoe",
      "price": 25,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6221023006440.JPG",
      "weight": 500,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 49
    },
    {
      "id": "IY4IUV",
      "name": "MAFA Cucumber",
      "price": 11,
      "image": "https://images.deliveryhero.io/image/product-information-management/61e5499928a51767784ffa66.jpg",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 36
    },
    {
      "id": "UPIEC5",
      "name": "MAFA Iceberg",
      "price": 8,
      "image": "https://images.deliveryhero.io/image/product-information-management/61e544f148deb9a0928b0945.jpg",
      "weight": 1,
      "measurement": "pcs",
      "category": "Fruits and Vegetables",
      "stock": 41
    },
    {
      "id": "70QXOF",
      "name": "MAFA Tomatoes",
      "price": 23,
      "image": "https://images.deliveryhero.io/image/product-information-management/61e548246d9e46fc3e13f8d7.jpg",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 28
    },
    {
      "id": "69RACK",
      "name": "MAFA Carrot",
      "price": 11,
      "image": "https://images.deliveryhero.io/image/product-information-management/61e5681da3a3c9c03011e3e5.jpg",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 4
    },
    {
      "id": "Y6YXQ6",
      "name": "MAFA Capsicum Mix",
      "price": 19,
      "image": "https://images.deliveryhero.io/image/product-information-management/61e546d46d9e46fc3e13f8d4.jpg",
      "weight": 500,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 44
    },
    {
      "id": "P4YFHI",
      "name": "MAFA Potatoes",
      "price": 10,
      "image": "https://images.deliveryhero.io/image/product-information-management/61e568c589fe45b497423e9e.jpg",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 8
    },
    {
      "id": "6S8SWX",
      "name": "MAFA Cherry Tomato Premium",
      "price": 11,
      "image": "https://images.deliveryhero.io/image/product-information-management/61e5473728a51767784ffa65.jpg",
      "weight": 250,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 7
    },
    {
      "id": "XO2341",
      "name": "Fresh Source Tomatoes",
      "price": 21,
      "image": "https://images.deliveryhero.io/image/product-information-management/61d5e8289851a91497826204.jpg",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 39
    },
    {
      "id": "D9G5JW",
      "name": "MAFA Red Onion",
      "price": 8,
      "image": "https://images.deliveryhero.io/image/product-information-management/61e569339fd494aad7b47c87.jpg",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 26
    },
    {
      "id": "MJ9SP0",
      "name": "MAFA Golden Onion",
      "price": 8,
      "image": "https://images.deliveryhero.io/image/product-information-management/61e5697bdc519529ba23c132.jpg",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 26
    },
    {
      "id": "Y9YIN2",
      "name": "MAFA Eggplant Big Size",
      "price": 12,
      "image": "https://images.deliveryhero.io/image/product-information-management/628e337a6f1a61a409096d95.jpg",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 8
    },
    {
      "id": "DQXCF0",
      "name": "MAFA Zucchini",
      "price": 11,
      "image": "https://images.deliveryhero.io/image/product-information-management/61e568756d9e46fc3e13f8f3.jpg",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 31
    },
    {
      "id": "VVKXVM",
      "name": "MAFA Sweet Potatoes",
      "price": 37,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6223000255315.JPG",
      "weight": 3,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 19
    },
    {
      "id": "JUAG3R",
      "name": "Pico Avocado",
      "price": 65,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6223001530640.JPG",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 29
    },
    {
      "id": "P2NUER",
      "name": "My Very Strawberries",
      "price": 30,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6221023006464.JPG",
      "weight": 250,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 43
    },
    {
      "id": "JX40EG",
      "name": "My Very Strawberries",
      "price": 50,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6221023006969.JPG",
      "weight": 450,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 6
    },
    {
      "id": "0IVM2S",
      "name": "My Very Blueberries",
      "price": 110,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6221023006525.JPG",
      "weight": 125,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 10
    },
    {
      "id": "16FC9D",
      "name": "Mafa Grapes Mix",
      "price": 26,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6223000252505.JPG",
      "weight": 500,
      "measurement": "g",
      "category": "Fruits and Vegetables",
      "stock": 5
    },
    {
      "id": "AC9T5T",
      "name": "Mafa Grapes White",
      "price": 26,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6223000252390.JPG",
      "weight": 500,
      "measurement": "g",
      "category": "Fruits and Vegetables",
      "stock": 47
    },
    {
      "id": "TWLB8N",
      "name": "MAFA Orange For Juice",
      "price": 31,
      "image": "https://images.deliveryhero.io/image/product-information-management/61e56a246d9e46fc3e13f8f6.jpg",
      "weight": 3,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 25
    },
    {
      "id": "6I5PVN",
      "name": "Fresh Source Cantaloupe",
      "price": 30,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224010502482.JPG",
      "weight": 2,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 23
    },
    {
      "id": "MAGM0Z",
      "name": "Fresh Source Avocado",
      "price": 40,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224010502185.JPG",
      "weight": 0.5,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 46
    },
    {
      "id": "M1YOUO",
      "name": "Fresh Source Kiwi",
      "price": 35,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224010502222.JPG",
      "weight": 0.5,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 42
    },
    {
      "id": "WCWWG7",
      "name": "Fresh Source Italian Yellow Apple",
      "price": 55,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224010502154.JPG",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 29
    },
    {
      "id": "3VRNS8",
      "name": "Fresh Source Italian Red Apple",
      "price": 55,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224010502147.JPG",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 42
    },
    {
      "id": "AZ7C0F",
      "name": "Fresh Source Mixed Apples",
      "price": 69,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224010502253.JPG",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 36
    },
    {
      "id": "PR5F1E",
      "name": "Pico Blackberry",
      "price": 40,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6223001530121.JPG",
      "weight": 125,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 7
    },
    {
      "id": "7HV183",
      "name": "Fresh Source Pineapple",
      "price": 78,
      "image": "https://images.deliveryhero.io/image/product-information-management/61dd5dcf2ab393cf21eca453.jpg",
      "weight": 1,
      "measurement": "pcs",
      "category": "Fruits and Vegetables",
      "stock": 28
    },
    {
      "id": "OXWTF2",
      "name": "My Very Blackberries",
      "price": 80,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6221023006471.JPG",
      "weight": 125,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 43
    },
    {
      "id": "D0NC97",
      "name": "Sharbatly Italian Kanzy Apple",
      "price": 68,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6225920001522.JPG",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 2
    },
    {
      "id": "48S2OU",
      "name": "Sharbatly Italian Green Apple",
      "price": 95,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6225920009528.JPG",
      "weight": 1,
      "measurement": "kg",
      "category": "Fruits and Vegetables",
      "stock": 18
    },
    {
      "id": "BGHVO4",
      "name": "Hygiene Mix Berries Holland",
      "price": 175,
      "image": "https://images.deliveryhero.io/image/product-information-management/6217607d689773c39b47d888.jpg",
      "weight": 150,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 21
    },
    {
      "id": "MCBO23",
      "name": "Hygiene Raspberries Holland",
      "price": 145,
      "image": "https://images.deliveryhero.io/image/product-information-management/6217601f17c25e2288d4d5af.jpg",
      "weight": 125,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 11
    },
    {
      "id": "TULXOF",
      "name": "Hygiene Blueberries Holland",
      "price": 135,
      "image": "https://images.deliveryhero.io/image/product-information-management/6217616ce2558e3f966abbdf.jpg",
      "weight": 125,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 31
    },
    {
      "id": "QCJEX2",
      "name": "Hygiene Cherries Spanish",
      "price": 169,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6001254042444.JPG",
      "weight": 250,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 21
    },
    {
      "id": "D3FJE2",
      "name": "Hygiene Baby Spinach Italian",
      "price": 65,
      "image": "https://images.deliveryhero.io/image/product-information-management/621638623087c103f9054ae8.jpg",
      "weight": 125,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 43
    },
    {
      "id": "DQK7JG",
      "name": "Hygiene Blackberries Holland",
      "price": 145,
      "image": "https://images.deliveryhero.io/image/product-information-management/62163933963f78221cc8941e.jpg",
      "weight": 125,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 28
    },
    {
      "id": "2EM9B7",
      "name": "Hygiene Baby Corn Thailand",
      "price": 55,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6221034098551.JPG",
      "weight": 125,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 18
    },
    {
      "id": "4DM8MA",
      "name": "Hygiene Cherry Tomatoes Honey Holland",
      "price": 115,
      "image": "https://images.deliveryhero.io/image/product-information-management/621638d502d4d2d190668a51.jpg",
      "weight": 200,
      "measurement": "gm",
      "category": "Fruits and Vegetables",
      "stock": 2
    },
    {
      "id": "4K3HK1",
      "name": "Mooomoo’s Veal Meat Cubes",
      "price": 120,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224010301030.JPG",
      "weight": 450,
      "measurement": "gm",
      "category": "Meat Poultry and Seafood",
      "stock": 14
    },
    {
      "id": "JIT79I",
      "name": "Mooomoo’s Veal Mince Meat",
      "price": 120,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224010301115.JPG",
      "weight": 450,
      "measurement": "gm",
      "category": "Meat Poultry and Seafood",
      "stock": 15
    },
    {
      "id": "N9N00K",
      "name": "Mooomoo’s Burger",
      "price": 107,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6221235000694.JPG",
      "weight": 400,
      "measurement": "gm",
      "category": "Meat Poultry and Seafood",
      "stock": 11
    },
    {
      "id": "WUK31X",
      "name": "Mooomoo’s Rice Kofta",
      "price": 66,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6221235000649.JPG",
      "weight": 330,
      "measurement": "gm",
      "category": "Meat Poultry and Seafood",
      "stock": 11
    },
    {
      "id": "9B1QL3",
      "name": "Mooomoo’s Veal Oven Kofta",
      "price": 99,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224010301122.JPG",
      "weight": 425,
      "measurement": "gm",
      "category": "Meat Poultry and Seafood",
      "stock": 5
    },
    {
      "id": "EMSV7W",
      "name": "Mooomoo’s Veal Meat Balls",
      "price": 90,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224010301139.JPG",
      "weight": 350,
      "measurement": "gm",
      "category": "Meat Poultry and Seafood",
      "stock": 9
    },
    {
      "id": "SMNETD",
      "name": "Mooomoo’s Breaded Kofta",
      "price": 99,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6221235000656.JPG",
      "weight": 425,
      "measurement": "gm",
      "category": "Meat Poultry and Seafood",
      "stock": 35
    },
    {
      "id": "T0R30Z",
      "name": "Mooomoo’s Veal Fillet Strips",
      "price": 175,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6224010301085.JPG",
      "weight": 450,
      "measurement": "gm",
      "category": "Meat Poultry and Seafood",
      "stock": 19
    },
    {
      "id": "S0JLPL",
      "name": "Mooomoo’s Burger W/Cheese",
      "price": 90,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6221235000601.JPG",
      "weight": 300,
      "measurement": "gm",
      "category": "Meat Poultry and Seafood",
      "stock": 19
    },
    {
      "id": "4UZS0S",
      "name": "Mooomoo’s Marinated Shawerma",
      "price": 126,
      "image": "https://images.deliveryhero.io/image/product-information-management/622a3134706068d52c731e90.jpg",
      "weight": 450,
      "measurement": "gm",
      "category": "Meat Poultry and Seafood",
      "stock": 23
    },
    {
      "id": "6V7F6F",
      "name": "Mooomoo’s Marinated Kebab",
      "price": 235,
      "image": "https://images.deliveryhero.io/image/darkstores-eg/EGY_6221235000595.JPG",
      "weight": 750,
      "measurement": "gm",
      "category": "Meat Poultry and Seafood",
      "stock": 27
    }
  ];

  export default products;