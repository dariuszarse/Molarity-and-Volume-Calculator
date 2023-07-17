README

As all three phases were to be submitted in a coherent document in written form I've uploaded the final document and put it in each of the subfolders.
The diagrams (that are included in the document) are additionally available in folder "03-Architecture-documentation".
The code is found under "04-Implementation"/"Zarse-Darius_321150303_DLMCSPSE01_Submission_Code".
The project (including code of course) can also be found under my github link: https://github.com/dariuszarse/Molarity-and-Volume-Calculator/tree/main

INSTALLATION GUIDE

ACCESSING WEBSITE:

The website is hosted under the URL:
https://dev5489.dd03wgeedl0cm.amplifyapp.com/

For opening it on your private machine follow these steps:
1. Install Visual Studio Code (https://code.visualstudio.com/download)
2. Install "Live Server" Extension (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. Download index.html, scripts.js and styles.css into the same folder.
4. Start Visual Studio Code and open that folder.
5. In your "Explorer" bar on the right, right-click index.html and select "Open with Live Server".

RUNNING API:

To run the API make sure you have FastAPI, Uvicorn and Requests installed.
If you don't, run these commands in your terminal:
pip install fastapi
pip install uvicorn
pip install requests

To test the API make sure to have Insomnia installed (https://insomnia.rest/download).
Afterwards execute the api.py file and use Insomnia to test functionality. 

TEST SUITE:

To run the tests make sure node.js is installed (https://nodejs.org/en).
Also make sure Jest dependencies are installed. If they are not, run this command:
npm install --save-dev jest

In your terminal, navigate to the folder in which the test.js files are downloaded and run the command:
npx jest
