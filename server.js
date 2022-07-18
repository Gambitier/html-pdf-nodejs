const http = require('http');
const puppeteer = require('puppeteer');
const path = require('path');

const absolutePath = path.resolve("./test.html");

console.log(absolutePath);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(absolutePath, {
    waitUntil: 'networkidle2',
  });
  await page.pdf({path: 'test.pdf', format: 'a4'});

  await browser.close();
})();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
