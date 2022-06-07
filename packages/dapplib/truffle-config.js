require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rescue saddle proud imitate private fresh struggle'; 
let testAccounts = [
"0x23519925762d11737f171bbafcbe344d485ea69dd798a62405a60bf81481445b",
"0x770fcbe2d6354d6422d0fec1354e101c0bd7e87adc6418367539b07cc8beb736",
"0x141fc35ceb723eef44444ba004ccdd9db5631125b20421054f273b8be16920a1",
"0xb25945e8a3281a452f1ce3a729ddf78c7c69328e3107271fcf797af0decf3f43",
"0x10c66e3e413682a6f828d74cf0a41027b3a1486477b3742f9bd2f380099ac305",
"0xd5a9b9883a5f6a6df3dd018bcf229562879062440ac92d90124b81631f61e3a1",
"0x93de5d342c934d198dd43bcfd4be54209816e78a94453fc52b0b47904ac8c70c",
"0xb2158079c7877b367ccdfa8c868fbca9c8cafea79505ac8198e1ef2920432cc2",
"0x817969a7e8b0e4ab8f7bb5782644be8c8a568981b0af87bb07eae16e8e10e1b1",
"0x9c13f4f0774b3a33a0f44db14754eeec946a05ebe8c0f797475bae87c66db7eb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

