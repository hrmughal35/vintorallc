// Hierarchical Product Structure
export const productHierarchy = {
  cups: {
    name: 'Cups',
    icon: '☕',
    description: 'Various types of cups for beverages',
    subcategories: {
      'single-wall': {
        name: 'Single Wall Cups',
        description: 'Standard single wall paper cups',
        icon: '☕',
        basePaperOptions: ['PE coated (most popular)', 'PLA coated', 'Water-base coated (100% plastic-free)'],
        products: [
          { id: 'A', name: 'Compact', size: '2.5oz', volume: '75ml', top: '50mm', bottom: '35mm', height: '50mm', qtyPerSleeve: '50pcs', sleevePerCarton: 40 },
          { id: 'B', name: 'Petite', size: '4oz', volume: '120ml', top: '60mm', bottom: '45mm', height: '60mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'C', name: 'Classic', size: '5oz', volume: '150ml', top: '64mm', bottom: '45mm', height: '73mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'D', name: 'Standard', size: '6oz', volume: '180ml', top: '68mm', bottom: '50mm', height: '72mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'E', name: 'Regular', size: '7oz', volume: '200ml', top: '73mm', bottom: '50mm', height: '78mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'F', name: 'Popular', size: '8oz', volume: '250ml', top: '80mm', bottom: '55mm', height: '90mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'G', name: 'Tall', size: '9oz', volume: '250ml', top: '76mm', bottom: '53mm', height: '95mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'H', name: 'Grande', size: '10oz', volume: '280ml', top: '80mm', bottom: '55mm', height: '110mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'I', name: 'Large', size: '12oz', volume: '350ml', top: '90mm', bottom: '58mm', height: '110mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'J', name: 'Extra Large', size: '14oz', volume: '400ml', top: '90mm', bottom: '60mm', height: '128mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'K', name: 'Jumbo', size: '16oz', volume: '450ml', top: '90mm', bottom: '58mm', height: '138mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'L', name: 'Mega', size: '20oz', volume: '560ml', top: '90mm', bottom: '60mm', height: '160mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'M', name: 'Super', size: '22oz', volume: '620ml', top: '90mm', bottom: '60mm', height: '170mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'N', name: 'Ultra', size: '24oz', volume: '680ml', top: '90mm', bottom: '60mm', height: '180mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
        ],
      },
      'double-wall': {
        name: 'Double Wall Cups',
        description: 'Insulated double wall cups for hot beverages',
        icon: '☕',
        basePaperOptions: ['PE coated (most popular)', 'PLA coated', 'Water-base coated (100% plastic-free)'],
        products: [
          { id: 'A', name: 'Insulated Regular', size: '8oz', volume: '250ml', top: '80mm', bottom: '55mm', height: '90mm', qtyPerSleeve: '25pcs', sleevePerCarton: 20 },
          { id: 'B', name: 'Insulated Large', size: '12oz', volume: '350ml', top: '90mm', bottom: '60mm', height: '110mm', qtyPerSleeve: '25pcs', sleevePerCarton: 20 },
          { id: 'C', name: 'Insulated Jumbo', size: '16oz', volume: '450ml', top: '90mm', bottom: '60mm', height: '136mm', qtyPerSleeve: '25pcs', sleevePerCarton: 20 },
        ],
      },
      'ripple-wall': {
        name: 'Ripple Wall Cups',
        description: 'Textured ripple wall design cups',
        icon: '☕',
        basePaperOptions: ['PE coated (most popular)', 'PLA coated', 'Water-base coated (100% plastic-free)'],
        products: [
          { id: 'A', name: 'Ripple Regular', size: '8oz', volume: '250ml', top: '80mm', bottom: '55mm', height: '90mm', qtyPerSleeve: '25pcs', sleevePerCarton: 20 },
          { id: 'B', name: 'Ripple Large', size: '12oz', volume: '350ml', top: '90mm', bottom: '60mm', height: '110mm', qtyPerSleeve: '25pcs', sleevePerCarton: 20 },
          { id: 'C', name: 'Ripple Jumbo', size: '16oz', volume: '450ml', top: '90mm', bottom: '60mm', height: '136mm', qtyPerSleeve: '25pcs', sleevePerCarton: 20 },
        ],
      },
      'pet-cups': {
        name: 'PET Cups',
        description: 'Lightweight, durable PET plastic cups',
        icon: '🥤',
        features: [
          'Any designs and logos can be customized',
          'Light-weight, waterproof, durable, shatterproof, recyclable, Heat-resistant',
          'Biodegradable',
        ],
        products: [
          { id: 'A', name: 'PET Compact', size: '5oz', volume: '150ml', top: '74mm', bottom: '45mm', height: '60mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'B', name: 'PET Small', size: '7oz', volume: '200ml', top: '74mm', bottom: '45mm', height: '75mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'C', name: 'PET Classic', size: '9oz', volume: '250ml', top: '90mm', bottom: '55mm', height: '70mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'D', name: 'PET Standard', size: '10oz', volume: '280ml', top: '90mm', bottom: '55mm', height: '80mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'E', name: 'PET Regular', size: '12oz', volume: '350ml', top: '90mm', bottom: '55mm', height: '100mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'F', name: 'PET Grande', size: '14oz', volume: '400ml', top: '90mm', bottom: '55mm', height: '115mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'G', name: 'PET Large', size: '16oz', volume: '450ml', top: '90mm', bottom: '55mm', height: '125mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'H', name: 'PET Extra Large', size: '20oz', volume: '560ml', top: '98mm', bottom: '60mm', height: '135mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'I', name: 'PET Jumbo', size: '22oz', volume: '620ml', top: '98mm', bottom: '60mm', height: '145mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'J', name: 'PET Mega', size: '24oz', volume: '680ml', top: '98mm', bottom: '60mm', height: '155mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'K', name: 'PET Super', size: '32oz', volume: '950ml', top: '107mm', bottom: '70mm', height: '170mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'L', name: 'PET Ultra', size: '40oz', volume: '1200ml', top: '115mm', bottom: '75mm', height: '180mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
        ],
      },
    },
  },
  paper: {
    name: 'Paper Products',
    icon: '📄',
    description: 'Eco-friendly paper-based disposable products',
    subcategories: {
      'paper-bowls': {
        name: 'Paper Bowls',
        description: 'Various sizes of paper bowls for food service',
        icon: '🥣',
        basePaperOptions: ['PE coated (most popular)', 'PLA coated', 'Water-base coated (100% plastic-free)'],
        products: [
          { id: 'A', name: 'Bowl Small', size: '500ml', top: '110mm', bottom: '90mm', height: '60mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'B', name: 'Bowl Medium', size: '750ml', top: '125mm', bottom: '100mm', height: '70mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'C', name: 'Bowl Large', size: '1000ml', top: '150mm', bottom: '120mm', height: '75mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'D', name: 'Bowl Extra Large', size: '1200ml', top: '160mm', bottom: '130mm', height: '80mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'E', name: 'Bowl Jumbo', size: '1300ml', top: '170mm', bottom: '140mm', height: '85mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'F', name: 'Bowl Mega', size: '1500ml', top: '180mm', bottom: '150mm', height: '90mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'G', name: 'Bowl Super', size: '1800ml', top: '190mm', bottom: '160mm', height: '95mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'H', name: 'Bowl Ultra', size: '2000ml', top: '200mm', bottom: '170mm', height: '100mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
        ],
      },
      'paper-plates': {
        name: 'Paper Plates',
        description: 'Disposable paper plates in multiple sizes',
        icon: '🍽️',
        products: [
          { id: 'A', name: 'Plate Small', size: '6 inch', diameter: '150mm', material: 'Paperboard', qtyPerPack: '50pcs', packPerCarton: 20 },
          { id: 'B', name: 'Plate Medium', size: '7 inch', diameter: '180mm', material: 'Paperboard', qtyPerPack: '50pcs', packPerCarton: 20 },
          { id: 'C', name: 'Plate Large', size: '9 inch', diameter: '230mm', material: 'Paperboard', qtyPerPack: '50pcs', packPerCarton: 20 },
        ],
      },
      'paper-containers': {
        name: 'Paper Containers',
        description: 'Food containers made from paper',
        icon: '📦',
        basePaperOptions: ['PE coated (most popular)', 'PLA coated', 'Water-base coated (100% plastic-free)'],
        products: [
          { id: 'A', name: 'Container Small', size: '8oz', volume: '250ml', top: '90mm', bottom: '70mm', height: '60mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'B', name: 'Container Medium', size: '12oz', volume: '350ml', top: '90mm', bottom: '70mm', height: '90mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'C', name: 'Container Large', size: '16oz', volume: '450ml', top: '98mm', bottom: '78mm', height: '95mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'D', name: 'Container Extra Large', size: '26oz', volume: '750ml', top: '115mm', bottom: '92mm', height: '100mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'E', name: 'Container Jumbo', size: '32oz', volume: '950ml', top: '115mm', bottom: '92mm', height: '120mm', material: 'PE/PLA Coated Paper', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
        ],
      },
    },
  },
  disposable: {
    name: 'Disposable Products',
    icon: '🍴',
    description: 'Single-use disposable items',
    subcategories: {
      'cutlery': {
        name: 'Cutlery',
        description: 'Disposable forks, knives, and spoons',
        icon: '🍴',
        products: [
          { id: 'A', name: 'Classic Fork', type: 'Fork', weight: '3g', material: 'PS/PLA', spec: '160mm', caseQty: '1000pcs' },
          { id: 'B', name: 'Classic Spoon', type: 'Spoon', weight: '3g', material: 'PS/PLA', spec: '160mm', caseQty: '1000pcs' },
          { id: 'C', name: 'Classic Knife', type: 'Knife', weight: '3g', material: 'PS/PLA', spec: '160mm', caseQty: '1000pcs' },
        ],
      },
      'portion-cups': {
        name: 'Portion Cups',
        description: 'Small portion cups in various sizes',
        icon: '🥤',
        products: [
          { id: 'A', name: 'Portion Mini', size: '0.75oz', volume: '22ml', top: '45mm', bottom: '30mm', height: '30mm', material: 'PP/PET', qtyPerSleeve: '100pcs', sleevePerCarton: 20 },
          { id: 'B', name: 'Portion Small', size: '1oz', volume: '30ml', top: '45mm', bottom: '30mm', height: '35mm', material: 'PP/PET', qtyPerSleeve: '100pcs', sleevePerCarton: 20 },
          { id: 'C', name: 'Portion Regular', size: '1.5oz', volume: '45ml', top: '50mm', bottom: '35mm', height: '35mm', material: 'PP/PET', qtyPerSleeve: '100pcs', sleevePerCarton: 20 },
          { id: 'D', name: 'Portion Standard', size: '2oz', volume: '60ml', top: '50mm', bottom: '35mm', height: '45mm', material: 'PP/PET', qtyPerSleeve: '100pcs', sleevePerCarton: 20 },
          { id: 'E', name: 'Portion Medium', size: '3.25oz', volume: '90ml', top: '74mm', bottom: '45mm', height: '40mm', material: 'PP/PET', qtyPerSleeve: '100pcs', sleevePerCarton: 20 },
          { id: 'F', name: 'Portion Large', size: '4oz', volume: '120ml', top: '74mm', bottom: '45mm', height: '55mm', material: 'PP/PET', qtyPerSleeve: '100pcs', sleevePerCarton: 20 },
          { id: 'G', name: 'Portion Extra Large', size: '5.5oz', volume: '160ml', top: '92mm', bottom: '55mm', height: '45mm', material: 'PP/PET', qtyPerSleeve: '100pcs', sleevePerCarton: 20 },
          { id: 'H', name: 'Portion Jumbo', size: '8oz', volume: '240ml', top: '92mm', bottom: '55mm', height: '70mm', material: 'PP/PET', qtyPerSleeve: '100pcs', sleevePerCarton: 20 },
        ],
      },
      'nitrile-gloves': {
        name: 'Nitrile Gloves',
        description: 'Professional disposable nitrile gloves',
        icon: '🧤',
        products: [
          { id: 'A', name: 'Glove Small', size: 'S', color: 'Blue', package: '100pcs/box', boxSize: '24x12x6cm', cartonDimension: '32x25x25cm', weight: '6kg' },
          { id: 'B', name: 'Glove Medium', size: 'M', color: 'Blue', package: '100pcs/box', boxSize: '24x12x6cm', cartonDimension: '32x25x25cm', weight: '6.5kg' },
          { id: 'C', name: 'Glove Large', size: 'L', color: 'Blue', package: '100pcs/box', boxSize: '24x12x6cm', cartonDimension: '32x25x25cm', weight: '7kg' },
          { id: 'D', name: 'Glove Extra Large', size: 'XL', color: 'Blue', package: '100pcs/box', boxSize: '24x12x6cm', cartonDimension: '32x25x25cm', weight: '7.5kg' },
        ],
      },
    },
  },
  containers: {
    name: 'Containers',
    icon: '📦',
    description: 'Food containers and storage solutions',
    subcategories: {
      'clear-containers': {
        name: 'Clear Containers',
        description: 'Transparent containers with lids',
        icon: '📦',
        products: [
          { id: 'A', name: 'Clear Small', size: '250ml', top: '95mm', bottom: '60mm', height: '70mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'B', name: 'Clear Medium', size: '350ml', top: '95mm', bottom: '60mm', height: '90mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'C', name: 'Clear Regular', size: '500ml', top: '115mm', bottom: '70mm', height: '80mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'D', name: 'Clear Large', size: '750ml', top: '115mm', bottom: '70mm', height: '110mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'E', name: 'Clear Extra Large', size: '1000ml', top: '140mm', bottom: '90mm', height: '100mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'F', name: 'Clear Jumbo', size: '1200ml', top: '140mm', bottom: '90mm', height: '120mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'G', name: 'Clear Mega', size: '1500ml', top: '140mm', bottom: '90mm', height: '150mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'H', name: 'Clear Super', size: '2000ml', top: '160mm', bottom: '100mm', height: '160mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'I', name: 'Clear Ultra', size: '2500ml', top: '160mm', bottom: '100mm', height: '200mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'J', name: 'Clear Max', size: '3000ml', top: '180mm', bottom: '120mm', height: '180mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'K', name: 'Clear Premium', size: '4000ml', top: '180mm', bottom: '120mm', height: '240mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'L', name: 'Clear Deluxe', size: '5000ml', top: '200mm', bottom: '140mm', height: '250mm', material: 'PET', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
        ],
      },
      'food-containers': {
        name: 'Food Containers',
        description: 'Multi-compartment food containers',
        icon: '🍱',
        products: [
          { id: 'A', name: 'Single Compartment Small', size: '500ml', compartments: 1, material: 'PP', dimensions: '180x130x50mm', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'B', name: 'Single Compartment Medium', size: '650ml', compartments: 1, material: 'PP', dimensions: '180x130x60mm', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'C', name: 'Single Compartment Large', size: '750ml', compartments: 1, material: 'PP', dimensions: '200x150x50mm', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'D', name: 'Single Compartment Extra Large', size: '1000ml', compartments: 1, material: 'PP', dimensions: '200x150x60mm', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'E', name: 'Dual Compartment', size: '1000ml', compartments: 2, material: 'PP', dimensions: '200x150x60mm', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'F', name: 'Triple Compartment', size: '1000ml', compartments: 3, material: 'PP', dimensions: '200x150x60mm', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'G', name: 'Single Compartment Jumbo', size: '1200ml', compartments: 1, material: 'PP', dimensions: '220x160x60mm', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'H', name: 'Dual Compartment Large', size: '1200ml', compartments: 2, material: 'PP', dimensions: '220x160x60mm', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'I', name: 'Triple Compartment Large', size: '1200ml', compartments: 3, material: 'PP', dimensions: '220x160x60mm', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'J', name: 'Single Compartment Mega', size: '1500ml', compartments: 1, material: 'PP', dimensions: '240x180x60mm', qtyPerPack: '50pcs', packPerCarton: 10 },
        ],
      },
      'sushi-trays': {
        name: 'Sushi Trays',
        description: 'Square and round sushi trays',
        icon: '🍣',
        products: [
          { id: 'A', name: 'Square Small', type: 'Square', baseSize: '190x130x20mm', lidSize: '190x130x25mm', material: 'PS Base, PET Lid', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'B', name: 'Square Medium', type: 'Square', baseSize: '220x150x25mm', lidSize: '220x150x30mm', material: 'PS Base, PET Lid', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'C', name: 'Square Large', type: 'Square', baseSize: '250x180x30mm', lidSize: '250x180x35mm', material: 'PS Base, PET Lid', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'D', name: 'Round Small', type: 'Round', baseSize: 'Dia 150x20mm', lidSize: 'Dia 150x25mm', material: 'PS Base, PET Lid', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'E', name: 'Round Medium', type: 'Round', baseSize: 'Dia 180x25mm', lidSize: 'Dia 180x30mm', material: 'PS Base, PET Lid', qtyPerPack: '50pcs', packPerCarton: 10 },
        ],
      },
      'hinged-containers': {
        name: 'Hinged Containers',
        description: 'Containers with hinged lids',
        icon: '📦',
        products: [
          { id: 'A', name: 'Clamshell Small', type: 'Clamshell', size: '6x6 inch', compartments: 1, material: 'PP/PET', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'B', name: 'Clamshell Medium', type: 'Clamshell', size: '8x8 inch', compartments: 1, material: 'PP/PET', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'C', name: 'Clamshell Large', type: 'Clamshell', size: '9x9 inch', compartments: 1, material: 'PP/PET', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'D', name: 'Clamshell Triple', type: 'Clamshell', size: '9x9 inch', compartments: 3, material: 'PP/PET', qtyPerPack: '50pcs', packPerCarton: 10 },
          { id: 'E', name: 'Sandwich Triangle', type: 'Sandwich', size: 'Triangle', material: 'PET', qtyPerPack: '100pcs', packPerCarton: 5 },
        ],
      },
      'injection-containers': {
        name: 'Injection Containers',
        description: 'Injection molded containers',
        icon: '📦',
        products: [
          { id: 'A', name: 'Injection Small', size: '100ml', material: 'PP', top: '70mm', bottom: '50mm', height: '50mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'B', name: 'Injection Medium', size: '200ml', material: 'PP', top: '80mm', bottom: '60mm', height: '60mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'C', name: 'Injection Regular', size: '300ml', material: 'PP', top: '90mm', bottom: '70mm', height: '70mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'D', name: 'Injection Large', size: '400ml', material: 'PP', top: '100mm', bottom: '80mm', height: '80mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'E', name: 'Injection Extra Large', size: '500ml', material: 'PP', top: '110mm', bottom: '90mm', height: '90mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'F', name: 'Injection Jumbo', size: '750ml', material: 'PP', top: '120mm', bottom: '100mm', height: '100mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'G', name: 'Injection Mega', size: '1000ml', material: 'PP', top: '130mm', bottom: '110mm', height: '110mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'H', name: 'Injection Super', size: '1500ml', material: 'PP', top: '140mm', bottom: '120mm', height: '120mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
          { id: 'I', name: 'Injection Ultra', size: '2000ml', material: 'PP', top: '150mm', bottom: '130mm', height: '130mm', qtyPerSleeve: '50pcs', sleevePerCarton: 20 },
        ],
      },
    },
  },
  lids: {
    name: 'Lids',
    icon: '🔲',
    description: 'Lids for various containers and cups',
    subcategories: {
      'lids-portion': {
        name: 'Lids for Portion Cups',
        description: 'Clear plastic lids for portion cups',
        icon: '🔲',
        products: [
          { id: 'A', name: 'Portion Lid Small', diameter: '62mm', fits: '0.75oz, 1oz, 1.5oz, 2oz', material: 'PET', qtyPerSleeve: '100pcs', sleevePerCarton: 20 },
          { id: 'B', name: 'Portion Lid Medium', diameter: '74mm', fits: '3.25oz, 4oz', material: 'PET', qtyPerSleeve: '100pcs', sleevePerCarton: 20 },
          { id: 'C', name: 'Portion Lid Large', diameter: '92mm', fits: '5.5oz', material: 'PET', qtyPerSleeve: '100pcs', sleevePerCarton: 20 },
        ],
      },
      'lids-beverage': {
        name: 'Lids for Beverage Cups',
        description: 'Various lids for beverage cups',
        icon: '🔲',
        products: [
          { id: 'A', name: 'Beverage Lid Small', diameter: '80mm', fits: '8oz, 10oz', material: 'PS/PLA', type: 'Flat/Dome', qtyPerSleeve: '100pcs', sleevePerCarton: 10 },
          { id: 'B', name: 'Beverage Lid Regular', diameter: '90mm', fits: '12oz, 14oz, 16oz, 20oz, 22oz, 24oz', material: 'PS/PLA', type: 'Flat/Dome', qtyPerSleeve: '100pcs', sleevePerCarton: 10 },
          { id: 'C', name: 'Beverage Lid Large', diameter: '98mm', fits: '16oz, 20oz, 22oz, 24oz', material: 'PS/PLA', type: 'Flat/Dome', qtyPerSleeve: '100pcs', sleevePerCarton: 10 },
          { id: 'D', name: 'Beverage Lid Extra Large', diameter: '107mm', fits: '32oz', material: 'PS/PLA', type: 'Flat/Dome', qtyPerSleeve: '100pcs', sleevePerCarton: 10 },
          { id: 'E', name: 'Beverage Lid Jumbo', diameter: '115mm', fits: '32oz', material: 'PS/PLA', type: 'Flat/Dome', qtyPerSleeve: '100pcs', sleevePerCarton: 10 },
        ],
      },
      'lids-bowl': {
        name: 'Lids for Bowls',
        description: 'Lids designed for bowl containers',
        icon: '🔲',
        products: [
          { id: 'A', name: 'Bowl Lid Small', diameter: '110mm', fits: '500ml', material: 'PET/PP', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'B', name: 'Bowl Lid Medium', diameter: '125mm', fits: '750ml', material: 'PET/PP', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
          { id: 'C', name: 'Bowl Lid Large', diameter: '150mm', fits: '1000ml', material: 'PET/PP', qtyPerSleeve: '50pcs', sleevePerCarton: 10 },
        ],
      },
    },
  },
  accessories: {
    name: 'Accessories',
    icon: '🏷️',
    description: 'Labels, paper rolls, and other accessories',
    subcategories: {
      'thermal-labels': {
        name: 'Thermal Labels',
        description: 'Thermal label paper for various applications',
        icon: '🏷️',
        products: [
          { id: 'A', name: 'Thermal Label Compact', type: 'Direct Thermal', size: '40x30mm', core: '25mm', qtyPerRoll: '1000pcs', rollsPerCarton: 50 },
          { id: 'B', name: 'Thermal Label Large', type: 'Direct Thermal', size: '100x150mm', core: '40mm', qtyPerRoll: '500pcs', rollsPerCarton: 10 },
          { id: 'C', name: 'Thermal Transfer Standard', type: 'Thermal Transfer', size: '50x40mm', core: '25mm', qtyPerRoll: '1000pcs', rollsPerCarton: 50 },
        ],
      },
      'thermal-rolls': {
        name: 'Thermal Rolls',
        description: 'Cash register paper / Thermal roll',
        icon: '🧾',
        products: [
          { id: 'A', name: 'Thermal Roll Standard', type: 'Thermal Paper', size: '80x80mm', core: '12mm', length: '60m', rollsPerCarton: 50 },
          { id: 'B', name: 'Thermal Roll Compact', type: 'Thermal Paper', size: '57x40mm', core: '12mm', length: '18m', rollsPerCarton: 100 },
          { id: 'C', name: 'Bond Roll Regular', type: 'Bond Paper', size: '76x70mm', core: '12mm', length: '50m', rollsPerCarton: 50 },
          { id: 'D', name: 'Bond Roll Small', type: 'Bond Paper', size: '44x70mm', core: '12mm', length: '50m', rollsPerCarton: 100 },
        ],
      },
      'ncr-paper': {
        name: 'NCR Paper Roll',
        description: 'Carbonless cash register paper',
        icon: '📄',
        products: [
          { id: 'A', name: 'NCR 2-Ply Standard', type: '2 Ply', size: '76x70mm', core: '12mm', length: '20m', rollsPerCarton: 50 },
          { id: 'B', name: 'NCR 3-Ply Standard', type: '3 Ply', size: '76x70mm', core: '12mm', length: '15m', rollsPerCarton: 50 },
          { id: 'C', name: 'NCR 2-Ply Compact', type: '2 Ply', size: '44x70mm', core: '12mm', length: '20m', rollsPerCarton: 100 },
        ],
      },
    },
  },
}

// Helper function to get all main categories
export const getMainCategories = () => {
  return Object.keys(productHierarchy).map(key => ({
    id: key,
    ...productHierarchy[key],
  }))
}

// Helper function to get subcategories for a main category
export const getSubcategories = (mainCategoryId) => {
  return Object.keys(productHierarchy[mainCategoryId]?.subcategories || {}).map(key => ({
    id: key,
    ...productHierarchy[mainCategoryId].subcategories[key],
  }))
}

// Helper function to get products for a subcategory
export const getProducts = (mainCategoryId, subcategoryId) => {
  return productHierarchy[mainCategoryId]?.subcategories[subcategoryId]?.products || []
}

// Legacy support - keep old structure for backward compatibility
export const productCategories = []
export const productSpecs = {}
