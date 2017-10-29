
// npm run test -- --watch


const { buildServerPath, historyParser, getLatest } = require("./history");

test('buildServerPath works with folder names only', () => {
  expect(buildServerPath('teamproject', 'modules', 'module', 'branch')).toBe('teamproject/modules/module/branch')
});

test('buildServerPath works with trailing AND ending slashes', () => {
  expect(buildServerPath('$/teamproj/', '/modules/', 'module', '/pcp/v5/')).toBe('$/teamproj/modules/module/pcp/v5/')
});

test('historyParser can work with empty input', () => {
  expect(historyParser(``)).toEqual([])
});

test('historyParser happy path', () => {
  expect(historyParser(
    `12345 1234567890 123456789012 1234567890123456789012345678901
     ----- ---------- ------------ -------------------------------
     54321 submitter1 2017-11-29   the qick brown fox juped over the lazy dog
     555   player2    can be else  no comment
  `)).toEqual([{
      id: "54321",
      submitter: 'submitter1',
      date: '2017-11-29',
      comment: 'the qick brown fox juped over t'
    }, {
      id: "555",
      submitter: 'player2',
      date: 'can be else',
      comment: 'no comment'
    }]);
});

// test('what happens if tf.exe is not available', () => {
//   const f = jest.fn();
//   f.mockReturnValue('hello');
//   getLatest("c:\\temp", f);
//   expect(f.mock.calls.length).toBe(1);
// });