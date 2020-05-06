"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _DrugService = _interopRequireDefault(require("../services/DrugService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var DrugController = /*#__PURE__*/function () {
  function DrugController() {
    (0, _classCallCheck2["default"])(this, DrugController);
  }

  (0, _createClass2["default"])(DrugController, null, [{
    key: "getAllDrugs",
    value: function () {
      var _getAllDrugs = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var allDrugs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _DrugService["default"].getAllDrugs();

              case 3:
                allDrugs = _context.sent;

                if (allDrugs.length > 0) {
                  util.setSuccess(200, "drugs retrieved", allDrugs);
                } else {
                  util.setSuccess(200, "no drug found");
                }

                console.log(allDrugs);
                return _context.abrupt("return", util.send(res));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function getAllDrugs(_x, _x2) {
        return _getAllDrugs.apply(this, arguments);
      }

      return getAllDrugs;
    }()
  }]);
  return DrugController;
}();

var _default = DrugController;
exports["default"] = _default;
//# sourceMappingURL=DrugController.js.map