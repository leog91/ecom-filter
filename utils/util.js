import productsJSON from "../product/miista-export.json";

/**
 * This is how I extract the colors/categories.
 * In a real scenario would be a graphql query to the shopify api.
 */

const products = productsJSON.data.allContentfulProductPage.edges;

const colorsBuilder = Array.from(
  new Set(
    products
      .map((p) => {
        if (p.node.colorFamily) {
          return p.node.colorFamily.map((c) => c.name);
        }
      })
      .flat()
      .filter((c) => c)
  )
);

const categoriesBuilder = Array.from(
  new Set(
    products
      .map((p) => {
        if (p.node.categoryTags) {
          return p.node.categoryTags.map((c) => c);
        }
      })
      .flat()
      .filter((c) => c)
  )
);

export const colors = [
  "Green",
  "White",
  "Brown",
  "Orange",
  "Black",
  "Natural",
  "Yellow",
  "Blue",
  "Red",
  "Purple",
  "Gold",
  "Silver",
  "Grey",
  "Pink",
];

export const categories = [
  "Sandals",
  "Mid-Heels",
  "New Arrivals",
  "Mules",
  "Flats",
  "Tall Boots",
  "Boots",
  "Outlet",
  "Court Shoes",
  "Ankle Boots",
  "Bags",
  "Mid",
  "Mini",
  "E8 Sandals ",
  "E8 Mid-Heels",
  "E8 New Arrivals",
  "E8 Sandals",
  "High-Heels",
  "Brogues",
  "New Arrivals ",
  "Loafers",
  "Micro-Heels",
  "Sandals ",
  "MId-Heels",
  "#New Arrivals",
  "E8 Flats",
  "E8 Brogues",
  "E8 Ankle Boots",
  "Micro Heels",
  "E8 Boots",
  "E8 High-Heels",
  "E8 Mules",
  "E8 Court Shoes",
  "E8 Outlet",
  "E8 Tall Boots",
  "E8 Heels",
  "E8 Mid-Heels ",
  "Mid-Heels ",
];
