// using Puppeteer to check monthly bill amount and due date

const puppeteer = require('puppeteer');
const timestamp = new Date();

// url and login credentials
const URL = 'https://www.example.com/customer_login';
const LOGIN = {
  userId: 'my_username',
  password: 'mypassword!'
};

// DOM IDs for input elements (userid, password, submit), monthly balance/due dates
const DOM = {
  login: {
    userid: '#custId',
    password: '#pwd',
    submit: '#btnLogin'
  },
  account: {
    balance: '#balance',
    dueDate: '#dueDate'
  },
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // navigate to ${URL}
  await page.goto(URL);

  // fill in userid, password, and click submit
  await page.type(DOM.login.userid, LOGIN.userId);
  await page.type(DOM.login.password, LOGIN.password);
  await page.click(DOM.login.submit);

  // capture monthly balance amount and due date
  const balanceDue = await page.$eval(DOM.account.balance, el => el.textContent);
  const dueDate = await page.$eval(DOM.account.dueDate, el => el.textContent);

  console.log(`${timestamp.toString()} -- Balance: ${balanceDue} Due: ${dueDate}`);

  await browser.close();
})();
