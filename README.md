# Bank of Flatiron

Welcome to the Bank of Flatiron, where you can trust us with all your financial
data! Use the below gif as an example of how the app should function.

![demo](https://curriculum-content.s3.amazonaws.com/phase-2/phase-2-code-challenge-bank-of-flatiron/demo.gif)

> To view in VSCode, right click on the README.md file and select "Open Preview".

## Set Up 
I uploaded the json data to a json server using [render](render.com)

First click on this link to start the json server before starting the app [bank-data.onrender.com](bank-data.onrender.com)

To start the app click [app](muilipato.github.io/bank-of-flatiron)



## Endpoints

-The base URL for your backend is: `bank-data.onrender.com/transactions`


## Core Deliverables

As a user, I should be able to:

- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new
  transaction to the table **as well as post the new transaction to the backend
  API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a
  description matching the search term should be shown in the transactions
  table.

### Endpoints for Core Deliverables

#### GET /transactions

Example Response:

```json
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
```

#### POST `/transactions`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
```

Example Response:

```json
{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
```
## License

This project is licensed under the terms of the [MIT License](LICENSE).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
