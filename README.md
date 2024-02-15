# Currency Converter App

<img src="https://github.com/KingsCreatives/Currency-Convertor/assets/119352937/8f6e2efa-cccc-40d1-b2e7-134affcc24dd" width="1000">

<br>This is a simple currency converter application built with React. It allows users to convert between different currencies using up-to-date exchange rates fetched from an [external API](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json). The app utilizes custom hooks for managing state and fetching data, following best practices for React development.


## Features

- **<ins>Currency Conversion:<ins/>** Users can select a base currency and a target currency, then enter an amount to convert between the two currencies.
- **<ins>Dynamic Exchange Rates:<ins/>** The app fetches the latest exchange rates from an [external API](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json) to ensure accurate conversions.
- **<ins>Custom Hooks:<ins/>** State management and data fetching are handled using custom hooks, promoting code reuse and maintainability.
- **<ins>Responsive Design:<ins/>** The app is designed to be responsive, providing a seamless experience across different devices and screen sizes.

## Built With

[![React][React.js]][React-url]
[![Vite][Vite]][Vite-url]
[![TailwindCSS][TailwindCSS]][Tailwind-url]

## Usage

1. Select a base currency from the dropdown menu.
2. Select a target currency from the dropdown menu.
3. Enter the amount you want to convert in the input field.
4. The converted amount will be displayed instantly.

## Setup

### Prerequisites
* npm
```sh
npm install npm@latest -g
```

### Installation
1. Clone the repo
```sh
git clone https://github.com/KingsCreatives/Currency-Convertor.git
```
2. Install npm packages
```sh
npm install
```

### How to Run Locally

1. Start front-end server
 ```sh
 npm run dev
 ```
2. Visit http://localhost:5173/

## Roadmap

- [ ] Sample Roadmap item

## Acknowledgements

Special thanks to [API Provider](https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json) for providing the exchange rate data.

<!--## License -->
<!--Optional: Include license information -->


<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
 
