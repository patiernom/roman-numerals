# Roman numerals Encoder and Decoder
This simple Roman Numerals Converter can be used at any time to convert numbers to Roman numerals and vice versa.

Online version it's available [here](http://patiernom.github.io/roman-numerals) 

The Converter has a limit, it can convert numbers from 1 to 3,999. 
To convert Roman numerals greater than 3,999, a leading underline character to input Roman numerals with an overline it's usually used. 
A line over a Roman numeral means it is multiplied by 1,000.
Actually this is not implemented in this version of the Converter.

## Project
The project it is powered by [React ( react-create-app )](https://reactjs.org/docs/create-a-new-react-app.html) and [Material UI](https://material-ui.com/) for the basic style and components.
[Mocha](https://mochajs.org/) it is used for the unit test with TDD approach on the Encoder/Decoder functions, and the component is it developed by using [Storybook](https://storybook.js.org/) in order to have a TBD environment instead of using other test methods on the React component.     

#### Structure
```bash
.
|-- src
|   |-- coponents
|   |   |-- Converter
|   |   |   |-- index.js
|   |   |   |-- ConverterInput.js
|   |   |-- Documentation.js 
|   |   |-- Footer.js
|   |   |-- Header.js
|   |   |-- HeroContent.js
|   |-- helpers
|   |   |-- romanNumerals.js
|   |   |-- romanNumerals.test.js
|   |   |-- inputPropTypeValidation.js
|   |-- stories
|   |   |-- Converter.stories.js
|   |-- App.js
|   |-- index.js
|   |-- theme.js
|-- package.json
|-- Dockerfile
```

#### src
`index.js` Application entrypoint
`App.js` App Component code
`theme.js` defined Theme for the app

##### components
The directory contains all the components used in App
`Converter` The dir contains the Converter jsx files 

##### helpers
`romanNumerals.js` it is the library that contains the Encoder and Decoder functions
`romanNumerals.test.js` it is the test case for the Encoder and Decoder functions
`inputPropTypeValidation.js` it is the validation function for the React Props

##### stories
Storybook stories
`Converter.stories.js` stories for the Converter component

## Usage

Clone the repository to your local directory
```bash
$ git clone https://github.com/patiernom/roman-numerals
$ cd roman-numerals
```

Install all dependencies
```bash
$ yarn install
```

Run the tests
```bash
$ yarn test
```

Start the Web application 
```bash
$ yarn start
```
Now you can see the UI on http://localhost:3000

Start Storybook 
```bash
$ npm run storybook
```
Now you can see the Storybook page on http://localhost:6006

## Docker

Clone the repository to your local directory
```bash
$ cd roman-numerals
$ docker build -t roman-numerals .
// check docker images
$ docker image ls
// Run your image with the following command 
// Note port 80 is mapped to port 3000 with -p
$ docker run -d -P -p 80:3000 roman-numerals:latest
```

## Further Implementations
The largest number you can write in Roman numerals is 3,999 which is MMMCMXCIX. 
You can represent numbers larger than 3,999 in Roman numerals using an overline.
An overline on a Roman numeral means you are multiplying that Roman numeral by 1,000.
For example, L means 50 × 1,000 = 50,000. 

The next step for the converter is to allow the user to use the sign "_" and change the encoder/decoder functions to handle this case. 
So that to enter 50,000 into this converter as a Roman numeral it's possible to enter  _L.

## License
MIT