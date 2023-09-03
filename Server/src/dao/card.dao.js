import cardModel from "../models/cards.models.js";
export default class CardManager {
  static #instance;

  static getInstance() {
    return this.#instance ? this.#instance : new CardManager();
  }

  async findAll(query, options) {
    try {
      const foundCard = await cardModel.paginate(query, options);
      return foundCard;
    } catch (error) {
      throw error;
    }
  }
  async create(card) {
    try {
      await cardModel.create(card);
    } catch (error) {
      throw error;
    }
  }
  async populate(card) {
    try {
      await cardModel.insertMany(card);
    } catch (error) {
      throw error;
    }
  }
  async update(id, ops) {
    try {
      const result = await cardModel.updateOne({ _id: id }, { $set: ops });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
