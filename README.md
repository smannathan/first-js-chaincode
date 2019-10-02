# first-js-chaincode

1. Clone this repository and import it into your VSCode.
2. cd /first-js-chaincode and run npm install
3. Use IBM Blockchain Platform extenstion and
    2.1 create a package
    2.2 Install a package to your local fabric environment
    2.3 Instantiate the service contract
4. Verify the local fabric server logs under output in VSCode
5. Try to fix and perform step 3 if there are any errors
6. Repeat the same steps if you want to upgrade your contract
7. Run test suite  
        Update your local wallet location on line number 16,
            test\functionalTests\js-smart-contract-util.js

        Run unit and functional tests,
            npm test
