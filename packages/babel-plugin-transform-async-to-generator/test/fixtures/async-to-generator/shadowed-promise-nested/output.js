function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

let _Promise;

function foo() {
  return _foo.apply(this, arguments);
}

function _foo() {
  _foo = _asyncToGenerator(function* () {
    let Promise;
    yield bar();

    function bar() {
      return _bar.apply(this, arguments);
    }

    function _bar() {
      _bar = _asyncToGenerator(function* () {
        return Promise.resolve();
      });
      return _bar.apply(this, arguments);
    }
  });
  return _foo.apply(this, arguments);
}
