require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot curve reward stereo puppy gesture cover army genre'; 
let testAccounts = [
"0x2b6c586dbda175581e21d311d02bcfcaabbc3b00e1a70a1e07268c0f92ce0906",
"0xde173588b938948dee42510befa50d892df0c68966914ecbbc9c34345c26dc4e",
"0x3606ee52563b89f821ceb91fc7be14333ddf36ad99bb50518cc7b6049764e6d4",
"0x4a3fedf13709214ae2be175368f2b827273fc332a41fb027a76ea77aeb03d1fe",
"0x479773557312bd5aa06f4078674dd3205116f82d60ee484ffed5884985c3ac31",
"0xe22dd68a9141ba17c0b147c7d03ffb1e3c5e9caa30b20a966b70f7c28379fea2",
"0xe203eda0be18d0c1006165c8ec625e53eb8cf4e76aa4ce075302a943dbbadd55",
"0xc06ab1f4c8b2d0c0cf92658026dc6597330603d1177d78f6debf2da2829845be",
"0xee33b5e490f5be981ae8387bdf687625eb16a86ba3db8e3de7cbc7599817f1b2",
"0xfa3d2da75c03226d2506864b3af361bb7a39541152f1e2ef12a95b773b5c6a37"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


