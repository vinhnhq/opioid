import database from "../database/models";

class DrugService {
  static async getAllDrugs() {
    try {
      return await database.Drug.findAll();
    } catch (error) {
      throw error;
    }
  }
}

export default DrugService;
