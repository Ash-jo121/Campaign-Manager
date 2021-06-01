'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var web3 = void 0;

var getProvider = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return window.web3.currentProvider.enable();

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function getProvider() {
        return _ref.apply(this, arguments);
    };
}();

getProvider();

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //Execution in browser and metamask is running
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    //We are on the server or the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://goerli.infura.io/v3/32c7b78d3447433a8488396c66051605');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwiZ2V0UHJvdmlkZXIiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJlbmFibGUiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQU0sMEJBQUE7d0ZBQWMsbUJBQUE7c0VBQUE7c0JBQUE7aURBQUE7eUJBQUE7d0NBQUE7K0JBQ1YsT0FBTyxBQUFQLEtBQVksQUFBWixnQkFBNEIsQUFBNUIsQUFEVTs7eUJBQUE7eUJBQUE7d0NBQUE7O0FBQUE7b0JBQUE7QUFBZDs7a0NBQUE7Z0NBQUE7QUFBQTtBQUFOOztBQUlBOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXlFLEFBQ3JFO0FBQ0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUVIO0FBSkQsT0FJTyxBQUNIO0FBQ0E7UUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDYixBQURhLEFBQWpCLEFBR0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBRUg7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FzaGlzaC9EZXNrdG9wL2tpY2tzdGFydCJ9