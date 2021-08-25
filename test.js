const W3WConverter = require('w3wconverter');
const ReadCsvFile = require('w3wconverter/src/lib/read-csv-file');
//const expect = require('chai').expect;
const chai = require('chai');
const expect = chai.expect;
require('dotenv').config();

const testdata = [{
    'address_number': '1',
    'postcode': 'SW1A 1AA'
},
{
    'address_number': '2',
    'postcode': 'SW1P 4QE'
},
{
    'address_number': '3',
    'postcode': 'SE1 7TP'
},
{
    'address_number': '4',
    'postcode': 'GL51 0EX'
}
];

const config = [];
config['fileToConvert'] = 'testcsv.csv';
config['fileToWrite'] = 'testoutput';

const convert = new W3WConverter(config);


describe('Array', function() {
    describe('getPostcodes()', function() {
        it('should return an array of parsed objects from a CSV file that matches an expected result.', async function() {
            const readCsvFile = new ReadCsvFile('testcsv.csv');
            parsedFile = await readCsvFile.readFile();
            
            expect(parsedFile[0].address_number).to.equal(testdata[0].address_number);
            expect(parsedFile[0].postcode).to.equal(testdata[0].postcode);
        })
    }),
    
    describe('getLatLongCoords()', async function() {
        
            
        it('should return an object containing lat with value of 51.5010102', async function() {
            const expected = {lat:51.5010102,lng:-0.1415626};
            let test;
            try {
                test = await convert.getLatLongCoords(testdata[0].postcode);
            }
            catch(error) {
                console.log(error);
            }
            expect(test.lat).to.equal(expected.lat);
        }),
        it('should return an object containing lng with a value of -0.1415626', async function() {
            const expected = {lat:51.5010102,lng:-0.1415626};
            let test;
            try {
                test = await convert.getLatLongCoords(testdata[0].postcode);
            }
            catch(error) {
                console.log(error);
            }
            expect(test.lng).to.equal(expected.lng);
        })
    })
})

