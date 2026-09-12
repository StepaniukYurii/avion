const images = import.meta.glob("../assets/images/products/*", { eager: true });
const getImage = (imageName) => {
  return images[`../assets/images/products/${imageName}`].default;
};

const products = [
  {
    id: 1,
    image: getImage("ceramic-001.jpg"),
    title: "Nordic White Vases",
    price: 50,
    description:
      "Nordic Best Selling White Vases New Design China Ceramic Vases Home Decor Ornament Vase Ceramic",
    dimensions: { width: 67, height: 40, depth: 38 },
    categories: ["Ceramics"],
  },
  {
    id: 2,
    image: getImage("ceramic-002.png"),
    title: "Vintage Vases",
    price: 25,
    description:
      "Rustic Vintage Style Tabletop Ceramic Vase Hand Painted Ceramic Floral Vase Fireplace Console Table Home Decor Ceramic Factory",
    dimensions: { width: 16, height: 12, depth: 10 },
    categories: ["Ceramics"],
  },
  {
    id: 3,
    image: getImage("ceramic-003.png"),
    title: "Wabi-sabistyle Vase",
    price: 256,
    description:
      "Wabi-sabistyle Ceramic Vase Vintage-aged Terracotta Pot Home Decoration Flowers Flower Arrangement Hydroponic Vase Ceramic",
    dimensions: { width: 15, height: 18, depth: 18 },
    categories: ["Ceramics"],
  },
  {
    id: 4,
    image: getImage("ceramic-004.jpg"),
    title: "Nordic Flower Vase",
    price: 42,
    description:
      "Unique Nordic Flower Vase Decor White Home Ceramic & Porcelain Vases",
    dimensions: { width: 5, height: 13, depth: 22 },
    categories: ["Ceramics"],
  },
  {
    id: 5,
    image: getImage("ceramic-005.jpg"),
    title: "Handmade Round Bowl",
    price: 112,
    description:
      "MSH Round Bowl Indoor Centerpieces Antique Ceramic Handmade Large and Small Clay Plant Ceramic Vase for Home Decor",
    dimensions: { width: 22, height: 22, depth: 10 },
    categories: ["Ceramics"],
  },
  {
    id: 6,
    image: getImage("ceramic-006.jpg"),
    title: "Ceramic Dinner Set",
    price: 105,
    description:
      "Nordic Ceramic Dinner Set Platter Custom logo Restaurant Ceramic Plates Dish",
    dimensions: { width: 233, height: 150, depth: 10 },
    categories: ["Ceramics"],
  },
  {
    id: 7,
    image: getImage("ceramic-007.jpg"),
    title: "Travertine Candle",
    price: 600,
    description:
      "Natural Travertine Candle Holder Empty Can Cup with Marble Stone Lid for Home Decoration or Christmas Gift",
    dimensions: { width: 11, height: 15, depth: 8 },
    categories: ["Ceramics", "Lamps"],
  },
  {
    id: 8,
    image: getImage("ceramic-008.jpg"),
    title: "Terracotta Flower Vase",
    price: 520,
    description:
      "Retro Round Terracotta Flower Vase Minimalist Ornaments Home Decor Interior Table Living Room Decorative Ceramic Vases",
    dimensions: { width: 35, height: 35, depth: 35 },
    categories: ["Ceramics"],
  },
  {
    id: 9,
    image: getImage("ceramic-009.jpg"),
    title: "Home Decoration Vase",
    price: 155,
    description:
      "Custom Nordic Home Decoration Vase Living Room Flower Arrangement Handicraft Ceramic Vase Various Ceramic Handicrafts",
    dimensions: { width: 7, height: 18, depth: 5 },
    categories: ["Ceramics"],
  },
  {
    id: 10,
    image: getImage("ceramic-010.png"),
    title: "Ceramic Dinner Set",
    price: 35,
    description:
      "16 Pieces Modern Rustic Solid Ceramic Dinner Set Reactive Glaze Stoneware Tableware Durable Microwave Safe Plates Bowls Cup Kit",
    dimensions: { width: 25, height: 2, depth: 25 },
    categories: ["Ceramics"],
  },
  {
    id: 11,
    image: getImage("lamp-001.png"),
    title: "Table Lamp",
    price: 126,
    description:
      "Wholesale Natural Yellow Travertine LED Table Lamp Wabi-Sabi Round Cone Travertine Desk Lamp for Bedroom Dining Room",
    dimensions: { width: 25, height: 25, depth: 45 },
    categories: ["Lamp"],
  },
  {
    id: 12,
    image: getImage("lamp-002.jpg"),
    title: "Hanging Lamp Japanese Style",
    price: 110,
    description:
      "Hanging Lamp Japanese Style Wabi Sabi Chandelier Living Room Restaurant Ceiling Lamp Modern Bar Designer Pendant Light",
    dimensions: { width: 30, height: 50, depth: 80 },
    categories: ["Lamp"],
  },
  {
    id: 13,
    image: getImage("lamp-003.jpg"),
    title: "Nordic Small Lamp",
    price: 148,
    description:
      "Designer Nordic Style Small Silent Wind Entrance Horizontal Bedside Pendant Light Japanese Style Homestay with Stone for Bedroom",
    dimensions: { width: 15, height: 55, depth: 10 },
    categories: ["Lamp"],
  },
  {
    id: 14,
    image: getImage("lamp-004.jpg"),
    title: "Bed Light Lamp ",
    price: 85,
    description:
      "Bed Light Lamp Led Touch Night Lamp Luminous White Switch Power Item Lighting Snl Room Color Design Small Material Electric ABS",
    dimensions: { width: 33, height: 15, depth: 10 },
    categories: ["Lamp"],
  },
  {
    id: 15,
    image: getImage("lamp-005.jpg"),
    title: "LED Table Lamp",
    price: 6,
    description:
      "USB Rechargeable LED Table Lamp Rechargeable Touch Night Light Led Desk Lamp Led Bedside Lamp Night Light with Eye Protection",
    dimensions: { width: 21, height: 15, depth: 15 },
    categories: ["Lamp"],
  },
  {
    id: 16,
    image: getImage("lamp-006.jpg"),
    title: "LED Desk Lamp",
    price: 15,
    description:
      "Next American Modern Design LED Desk Lamp Nordic Ins Minimalist Warehouse Vertical Switch Control Luxury Standing Floor Lamp E26",
    dimensions: { width: 40, height: 40, depth: 162 },
    categories: ["Lamp"],
  },
  {
    id: 17,
    image: getImage("lamp-007.jpg"),
    title: "Yellow Cave Stone Lamp",
    price: 19,
    description:
      "Nordic Modern Yellow Cave Stone Restaurant Bar Pendant Light Cement Terrazzo Bedroom Bedside Pendant Light",
    dimensions: { width: 42, height: 42, depth: 23 },
    categories: ["Lamp"],
  },
  {
    id: 18,
    image: getImage("lamp-008.png"),
    title: "LED Floor Light Lamp",
    price: 30,
    description:
      "High Quality LED Floor Light Lamp Modern Nordic Lamp New Living Room Corner Light Floor Lamp Adjustable Lighting",
    dimensions: { width: 147, height: 32, depth: 32 },
    categories: ["Lamp"],
  },
  {
    id: 19,
    image: getImage("lamp-009.jpg"),
    title: "Himalayan Salt Lamp",
    price: 5,
    description:
      "Himalayan Salt Lamp Raw LED Round Globe Natural Rock Salt Wooden Base Home Decor Ambient Lighting",
    dimensions: { width: 15, height: 20, depth: 15 },
    categories: ["Lamp"],
  },
  {
    id: 20,
    image: getImage("chair-001.jpg"),
    title: "Reception Sofa Chair",
    price: 30,
    description:
      "Modern Simple Single Reception Sofa Chair Combination for Home Office Beauty Salon Hotel Lobby Sales Office Negotiation Dining",
    dimensions: { width: 77, height: 67, depth: 80 },
    categories: ["Chair"],
  },
  {
    id: 21,
    image: getImage("chair-002.jpg"),
    title: "Caterpillar Lounge Chair",
    price: 32,
    description:
      "Creative internet celebrity bean bag caterpillar lounge chair, bedroom small sofa, balcony leisure lazy sofa",
    dimensions: { width: 75, height: 80, depth: 85 },
    categories: ["Chair"],
  },
  {
    id: 22,
    image: getImage("chair-003.png"),
    title: "Foldable Garden Chair",
    price: 155,
    description:
      "Luxury Solid Wood Foldable Garden Chair Versatile Outdoor Furniture for Home Garden Hotel Gym School Warehouse",
    dimensions: { width: 46, height: 80, depth: 46 },
    categories: ["Chair"],
  },
  {
    id: 23,
    image: getImage("chair-004.jpg"),
    title: "Dining Room Chair",
    price: 45,
    description:
      "Nordic Velvet Fabric Modern Luxury Design Furniture Dining Room Chairs Upholstered Metal Leg Gold Dining Chair",
    dimensions: { width: 60, height: 60, depth: 60 },
    categories: ["Chair"],
  },
  {
    id: 24,
    image: getImage("chair-005.jpg"),
    title: "Modern Velvet Dining Chair",
    price: 35,
    description:
      "Modern Velvet Dining Chair Seat Sturdy Metal Frame Workshop for Home Furniture Restaurant Lounge",
    dimensions: { width: 65, height: 67, depth: 83 },
    categories: ["Chair"],
  },
  {
    id: 25,
    image: getImage("chair-006.jpg"),
    title: "Wood Dining Chair",
    price: 28,
    description:
      "Vintage Solid Wood Dining Chair with Upholstered Backrest: Comfortable and Relaxing Chair for Home Dining Rooms and Offices",
    dimensions: { width: 52, height: 78, depth: 23 },
    categories: ["Chair"],
  },
  {
    id: 26,
    image: getImage("chair-007.png"),
    title: "Dining Chair",
    price: 12,
    description:
      "Dining Chair Home Furniture Nordic Style Backrest Modern Simple Iron Art Horn-Shaped for Bedroom and Dining Room",
    dimensions: { width: 38, height: 41, depth: 35 },
    categories: ["Chair"],
  },
  {
    id: 27,
    image: getImage("chair-008.jpg"),
    title: "Rocking Relaxing Sofa",
    price: 33,
    description:
      "Wholesale Comfortable Accent Modern Papasan Outdoor Furniture Rocking Relaxing Sofa Lazy Rocking Recliner Chair for Living Room",
    dimensions: { width: 65, height: 120, depth: 92 },
    categories: ["Chair"],
  },
  {
    id: 28,
    image: getImage("chair-009.png"),
    title: " Wood Dining Chair",
    price: 28,
    description:
      "Modern Eco-Friendly Solid Wood Dining Chair with Curved Backrest and Upholstered Seat for Home Office and Dining",
    dimensions: { width: 50, height: 77, depth: 52 },
    categories: ["Chair"],
  },
  {
    id: 29,
    image: getImage("table-001.jpg"),
    title: "Table for Living Room",
    price: 16,
    description:
      "Modern Rubber Wood 2-Tier Side Table Narrow End Table Sofa Side Table for Living Room & Bedroom Nightstand with Storage Shelf",
    dimensions: { width: 70, height: 30, depth: 67 },
    categories: ["Table"],
  },
  {
    id: 30,
    image: getImage("table-002.png"),
    title: "Coffee Table Brown",
    price: 36,
    description:
      "New European Style Living Room Furniture Irregular Coffee Table Brown Solid Wood Creative Cloud Coffee Table",
    dimensions: { width: 117, height: 90, depth: 40 },
    categories: ["Table"],
  },
  {
    id: 31,
    image: getImage("table-003.jpg"),
    title: "Dining Table With Metal Legs",
    price: 26,
    description:
      "Nordic Black White Round MDF Wooden Round Home Furniture Dining Table With Metal Legs for Sale",
    dimensions: { width: 125, height: 50, depth: 125 },
    categories: ["Table"],
  },
  {
    id: 32,
    image: getImage("table-004.png"),
    title: "Dining Table-Portable",
    price: 604,
    description:
      "Modern Luxury Stone Round Dining Table-Portable & Durable Home Furniture for Apartment & Hotel Use with Four Dining Chairs",
    dimensions: { width: 233, height: 150, depth: 10 },
    categories: ["Table"],
  },
  {
    id: 33,
    image: getImage("table-005.jpg"),
    title: "Table with Hidden Storage",
    price: 159,
    description:
      "Vernier Round Burl Wood Side Table with Hidden Storage Cylindrical Drum Base Mid Century Modern Accent Table for Living Room",
    dimensions: { width: 40, height: 62, depth: 40 },
    categories: ["Table"],
  },
  {
    id: 34,
    image: getImage("table-006.jpg"),
    title: "Dining Restaurant Table",
    price: 31,
    description:
      "Wholesale Factory Indoor Furniture Modern Dia80cm 4 Seater Glass Top Round Black Dining Restaurant Table for Cafe",
    dimensions: { width: 80, height: 75, depth: 80 },
    categories: ["Table"],
  },
  {
    id: 35,
    image: getImage("table-007.jpg"),
    title: "Table for Home Living",
    price: 10,
    description:
      "Modern Nesting Furniture Durable Eco-Friendly Easy to Clean Bamboo MDF Coffee End Table for Home Living Room Bedroom Home Office",
    dimensions: { width: 58, height: 10, depth: 58 },
    categories: ["Table"],
  },
  {
    id: 36,
    image: getImage("table-008.jpg"),
    title: "Coffee Table Modern Wooden",
    price: 55,
    description:
      "European Style Rustic Furniture Reclaimed Coffee Table Modern Wooden",
    dimensions: { width: 60, height: 45, depth: 60 },
    categories: ["Table"],
  },
  {
    id: 37,
    image: getImage("table-009.jpg"),
    title: "Travertine Side Table",
    price: 484,
    description:
      "New Design Beige Travertine Side Table Contemporary Organic Modern Minimalist Furniture for Living Room Hotel Entry",
    dimensions: { width: 233, height: 150, depth: 10 },
    categories: ["Table"],
  },
  {
    id: 38,
    image: getImage("table-010.jpg"),
    title: "Metal Table Modern",
    price: 42,
    description:
      "Factory Luxury Furniture Entryway Table Marble Top Foyer Metal Tables Modern Living Room Gold Console Table",
    dimensions: { width: 80, height: 80, depth: 30 },
    categories: ["Table"],
  },
  {
    id: 39,
    image: getImage("jewellery-001.jpg"),
    title: "Wild Flower Large Diamond Pendant",
    price: 8508,
    description:
      "HIgh jewellery craftsmanship meets contemporary style in our Wild Flower necklace. Crafted with Graff's unmistakable eye for detail, layers of diamonds blossom in silhouette upon the pendant, with each sculptural petal individually rendered by hand.",
    dimensions: { width: 233, height: 150, depth: 10 },
    categories: ["Jewellery"],
  },
  {
    id: 40,
    image: getImage("storage-001.jpg"),
    title: "Corner Shelf Wall Mounted",
    price: 6,
    description:
      "Corner Shelves Corner Shelf Wall Mounted - Floating Book for Wall Shelving Hardware Included for Kitchen, Living Room, Bathroom",
    dimensions: { width: 57, height: 25, depth: 35 },
    categories: ["Storage"],
  },
  {
    id: 41,
    image: getImage("storage-002.png"),
    title: "Bedroom Bookcase",
    price: 225,
    description:
      "Stock Solid Wood 5 Tier Bedroom Bookcase With Tempered Glass Flip up Doors Brown Natural Wood Freestanding Heavy Duty",
    dimensions: { width: 46, height: 177, depth: 22 },
    categories: ["Storage"],
  },
  {
    id: 42,
    image: getImage("storage-003.jpg"),
    title: "Organizer Storage",
    price: 7,
    description:
      "Modern Natural Bamboo Wood Three-Layer Standing Type Non-Folding Sustainable Multifunction Spice Corner Organizer Storage",
    dimensions: { width: 31, height: 35, depth: 15 },
    categories: ["Storage"],
  },
  {
    id: 43,
    image: getImage("storage-004.jpg"),
    title: "Storage Shelf",
    price: 101,
    description:
      "Italian - Style Acrylic Entryway Storage Shelf, Modern Minimalist Entry Storage Sideboard",
    dimensions: { width: 79, height: 40, depth: 90 },
    categories: ["Storage"],
  },
  {
    id: 44,
    image: getImage("storage-005.jpg"),
    title: "Kitchen Island with Storage",
    price: 36,
    description:
      "Kitchen Island with Storage,Rolling Kitchen Cart with 3-Drawer Storage Cabinet on Wheels with Adjustable Shelves for Dining Room",
    dimensions: { width: 50, height: 37, depth: 47 },
    categories: ["Storage"],
  },
];
export default products;
