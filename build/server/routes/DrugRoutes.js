"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _DrugController = _interopRequireDefault(require("../controllers/DrugController"));

var router = (0, _express.Router)();
router.get("/", _DrugController["default"].getAllDrugs);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=DrugRoutes.js.map