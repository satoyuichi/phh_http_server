'use strict';
const http = require('http');
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain; charset=utf-8'
//   });
//   res.write(req.headers['user-agent']);
//   res.end();
// });

const server = http.createServer(requestedServer);

function requestedServer (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(`<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8"/>
    <title>Document</title>
  </head>
  <body>`);

  // アクセスされた時の日時を書き込む
  let date = new Date();
  for (let i = 0; i < 100; i++) {
    res.write(`<div>現在の日時は${date}だよ</div>`);
  }

  res.write(`</body>
</html>`);
  res.end();

  console.log ("requestedServer が呼ばれた");
}

const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
