let products = [
  { id: '1', name: 'Apple iPhone 13', price: 799.99, description: 'The latest iPhone with A15 Bionic chip, 6.1-inch Super Retina XDR display.' },
  { id: '2', name: 'Samsung Galaxy S21', price: 699.99, description: 'High-end smartphone with Snapdragon 888, 120Hz AMOLED display.' },
  { id: '3', name: 'Sony WH-1000XM4', price: 349.99, description: 'Industry-leading noise-canceling over-ear headphones.' },
  { id: '4', name: 'Dell XPS 13', price: 999.99, description: 'Ultra-thin and light laptop with Intel i7, 13.4-inch InfinityEdge display.' },
  { id: '5', name: 'Apple MacBook Pro', price: 1299.99, description: 'Powerful laptop with M1 chip, 13-inch Retina display.' },
  { id: '6', name: 'HP Spectre x360', price: 1199.99, description: 'Convertible laptop with Intel i7, 16GB RAM, 512GB SSD.' },
  { id: '7', name: 'Samsung QLED TV', price: 1499.99, description: '65-inch 4K QLED TV with Quantum Dot technology.' },
  { id: '8', name: 'Amazon Echo Dot', price: 49.99, description: 'Smart speaker with Alexa, compact and powerful.' },
  { id: '9', name: 'Google Nest Hub', price: 89.99, description: 'Smart display with Google Assistant, 7-inch touchscreen.' },
  { id: '10', name: 'Fitbit Charge 4', price: 129.99, description: 'Fitness and activity tracker with built-in GPS.' },
  { id: '11', name: 'Nintendo Switch', price: 299.99, description: 'Hybrid gaming console with detachable Joy-Con controllers.' },
  { id: '12', name: 'Sony PlayStation 5', price: 499.99, description: 'Next-gen gaming console with ultra-fast SSD and ray tracing.' },
  { id: '13', name: 'Microsoft Xbox Series X', price: 499.99, description: 'Powerful gaming console with 4K gaming and 120Hz support.' },
  { id: '14', name: 'Bose QuietComfort 35 II', price: 299.99, description: 'Wireless noise-canceling headphones with Alexa voice control.' },
  { id: '15', name: 'Roku Streaming Stick+', price: 49.99, description: '4K streaming device with HDR support and voice remote.' },
  { id: '16', name: 'GoPro HERO9 Black', price: 399.99, description: 'Action camera with 5K video and HyperSmooth stabilization.' },
  { id: '17', name: 'Canon EOS Rebel T7', price: 449.99, description: 'DSLR camera with 24.1MP sensor and built-in Wi-Fi.' },
  { id: '18', name: 'JBL Flip 5', price: 119.99, description: 'Portable Bluetooth speaker with waterproof design.' },
  { id: '19', name: 'Anker PowerCore 10000', price: 29.99, description: 'Compact portable charger with 10000mAh capacity.' },
  { id: '20', name: 'Logitech MX Master 3', price: 99.99, description: 'Advanced wireless mouse with ultra-fast scrolling.' },
  { id: '21', name: 'WD My Passport 4TB', price: 99.99, description: 'Portable external hard drive with auto backup and password protection.' },
  { id: '22', name: 'ASUS ROG Strix G15', price: 1299.99, description: 'Gaming laptop with Intel i7, 16GB RAM, and RTX 2070.' },
  { id: '23', name: 'Apple Watch Series 6', price: 399.99, description: 'Smartwatch with blood oxygen monitoring and ECG app.' },
  { id: '24', name: 'Tile Mate', price: 24.99, description: 'Bluetooth tracker for keys, bags, and other items.' },
  { id: '25', name: 'Dyson V11 Torque Drive', price: 699.99, description: 'Cordless vacuum cleaner with powerful suction.' },
  { id: '26', name: 'Instant Pot Duo 7-in-1', price: 89.99, description: 'Electric pressure cooker with multiple functions.' },
  { id: '27', name: 'Keurig K-Elite', price: 169.99, description: 'Single serve coffee maker with iced coffee capability.' },
  { id: '28', name: 'Ninja Professional Blender', price: 99.99, description: 'High-powered blender with Total Crushing Technology.' },
  { id: '29', name: 'Philips Hue Starter Kit', price: 199.99, description: 'Smart lighting system with 4 bulbs and a hub.' },
  { id: '30', name: 'Ring Video Doorbell 3', price: 199.99, description: 'Video doorbell with enhanced Wi-Fi and motion detection.' },
  { id: '31', name: 'Eufy RoboVac 11S', price: 229.99, description: 'Slim robotic vacuum cleaner with BoostIQ technology.' },
  { id: '32', name: 'Samsung Galaxy Buds Pro', price: 199.99, description: 'True wireless earbuds with active noise canceling.' },
  { id: '33', name: 'Belkin BoostCharge Pro', price: 129.99, description: '3-in-1 wireless charging dock for iPhone, Apple Watch, and AirPods.' },
  { id: '34', name: 'Arlo Pro 3', price: 499.99, description: 'Wireless home security camera system with 2K HDR.' },
  { id: '35', name: 'Garmin Forerunner 945', price: 599.99, description: 'Premium GPS running and triathlon smartwatch.' },
  { id: '36', name: 'Sony A7 III', price: 1999.99, description: 'Full-frame mirrorless camera with 24.2MP sensor and 4K video.' },
  { id: '37', name: 'Yeti Rambler 20 oz', price: 29.99, description: 'Durable stainless steel tumbler with double-wall vacuum insulation.' },
  { id: '38', name: 'Hydro Flask Water Bottle', price: 39.99, description: 'Insulated stainless steel water bottle with a flex cap.' },
  { id: '39', name: 'Coleman Sundome Tent', price: 84.99, description: '4-person dome tent with easy setup and weather protection.' },
  { id: '40', name: 'REI Co-op Camp Chair', price: 49.99, description: 'Portable camping chair with cup holder and carrying bag.' },
  { id: '41', name: 'Osprey Atmos AG 65', price: 319.99, description: 'Men’s backpacking pack with Anti-Gravity suspension.' },
  { id: '42', name: 'Patagonia Nano Puff Jacket', price: 199.99, description: 'Lightweight, warm, and windproof insulated jacket.' },
  { id: '43', name: 'The North Face Venture 2 Jacket', price: 99.99, description: 'Waterproof, breathable, and packable rain jacket.' },
  { id: '44', name: 'Merrell Moab 2 Hiking Shoes', price: 99.99, description: 'Durable, comfortable hiking shoes with Vibram outsole.' },
  { id: '45', name: 'Columbia Silver Ridge Cargo Pants', price: 49.99, description: 'Lightweight, moisture-wicking cargo pants for outdoor activities.' },
  { id: '46', name: 'Fjällräven Kånken Backpack', price: 79.99, description: 'Classic, durable backpack with a simple, functional design.' },
  { id: '47', name: 'Leatherman Wave Plus', price: 99.99, description: 'Multi-tool with 18 tools, including pliers, knives, and screwdrivers.' },
  { id: '48', name: 'Suunto Core All Black', price: 299.99, description: 'Outdoor sports watch with altimeter, barometer, and compass.' },
  { id: '49', name: 'Garmin GPSMAP 64sx', price: 349.99, description: 'Handheld GPS with preloaded maps and a 2.6-inch sunlight-readable display.' },
  { id: '50', name: 'GoPro MAX', price: 499.99, description: 'Waterproof 360-degree camera with Max HyperSmooth stabilization.' },
];

export const productCatalogResolvers = {
  Query: {
    products: () => products
  },
};
