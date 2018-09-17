# Onepage Checkout

> Onepage Checkout

## Requirements

*   NPM
*   Shopware platform instance

## Configuration

*   Open the "src/config.js" and fill in your shopware playground url and your API access key.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
``` 

## Output

*   Copy the output from the `dist` folder to your web server

## Usage

### Routes 

*   Landingpage: "yourdomain.com/#/?uuid=yourproductnumber"
*   Checkout: "yourdomain.com/#/checkout?t=yourcartcontext"