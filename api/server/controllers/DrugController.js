import DrugService from "../services/DrugService";
import Util from "../utils/Utils";

const util = new Util();

class DrugController {
  static async getAllDrugs(req, res) {
    try {
      const allDrugs = await DrugService.getAllDrugs();
      if (allDrugs.length > 0) {
        util.setSuccess(200, "drugs retrieved", allDrugs);
      } else {
        util.setSuccess(200, "no drug found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default DrugController;
