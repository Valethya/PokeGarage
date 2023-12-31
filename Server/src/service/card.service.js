import cardManager from "../dao/card.dao.js";
import fs from "fs";
const manager = await cardManager.getInstance();

function processData(cards) {
  //   const documents = cards.docs.map((prod) => new cardstDto(prod));
  const { totalPages, page, hasPrevPage, hasNextPage, prevPage, nextPage } =
    cards;

  const prevUrl = `https://poke-garage-valethya.vercel.app/?${new URLSearchParams(
    {
      page: page - 1,
    }
  )}`;
  const nextUrl = `https://poke-garage-valethya.vercel.app/?${new URLSearchParams(
    {
      page: page + 1,
    }
  )}`;

  const response = {
    totalDocs: cards.docs.length,
    totalPages,
    prevPage,
    nextPage,
    page,
    hasNextPage,
    hasPrevPage,
    prevLink: prevPage ? prevUrl : null,
    nextLink: nextPage ? nextUrl : null,
    payload: cards.docs,
  };

  return response;
}

async function findCards(args) {
  try {
    const { type, name, page, limit, sort } = args;
    const query = {};

    if (type !== undefined) {
      query.type = type;
    }

    if (name !== undefined) {
      query.name = name;
    }

    if (name) {
      query.name = { $regex: new RegExp(name, "i") };
    }
    query.stock = true;
    const options = {
      page: page || 1,
      limit: limit || 24,
      sort: sort || "",
    };
    const foundCard = await manager.findAll(query, options);
    const response = processData(foundCard);

    return response;
  } catch (error) {
    return error.message;
  }
}

async function createCards(args) {
  try {
    const { name, price, stock, type } = args;

    const card = {
      name,
      price,
      image,
      stock,
      type,
    };

    await manager.create(card);
    return "carta creada";
  } catch (error) {
    throw error;
  }
}

async function findJson() {
  const file = `${process.cwd()}/database.json`;
  if (fs.existsSync(file)) {
    const data = await fs.promises.readFile(file);
    const response = JSON.parse(data);

    return response;
  }
  return "no se encuentra el archivo";
}

async function populateCards() {
  try {
    const cards = await findJson();

    const cardsWithFinalPrice = cards.map((card) => ({
      ...card,
      finalPrice: card.price - (card.price * card.discount) / 100,
    }));
    console.log(cardsWithFinalPrice);
    await manager.populate(cardsWithFinalPrice);
    return "cartas cargadas";
  } catch (error) {
    throw error;
  }
}
async function updateCard(args) {
  try {
    const { price, stock, id } = args;
    const ops = {};
    if (price) {
      ops.price = price;
    }
    if (stock) {
      ops.stock = stock;
    }
    const result = await manager.update(id, ops);

    if (result.modifiedCount != 0) {
      return "todo Ok";
    }
  } catch (error) {
    throw error;
  }
}
export { findCards, createCards, populateCards, updateCard };
