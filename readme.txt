Prerequisites for Running XFaaS Dashboard
Before you proceed with setting up the XFaaS dashboard, ensure the following prerequisites are met:
1.	Git Installation:
•	Confirm that Git is installed on your system. If not, download and install Git for your respective operating system from here.
2.	Node.js Installation:
•	Install the latest version of Node.js. Visit Node.js's official website for detailed instructions on installation.
3.	AWS CLI and SDK Setup:
•	Set up the AWS Command Line Interface (CLI) and AWS Software Development Kits (SDKs) to enable interactions with AWS services.
•	Refer to the following link for comprehensive setup instructions: Setting up AWS CLI and SDKs.

Cloning and Running XFaaS

Before you proceed with cloning and running XFaaS, ensure you have Google Chrome installed as it is mandatory for viewing the XFaaS dashboard.

Clone the Repository:

Clone the GitHub repository XFaaS using the following command:
bash
Copy code
git clone https://github.com/itsCheithanya/XFaaS/tree/styling_branch
Alternatively, you can download the zip file of the repository and unzip it.
Frontend Setup:

Open your terminal and navigate to the /XFaaS/frontend directory using the following command:
bash
Copy code
cd XFaaS/frontend
Install all the npm packages by executing the command:
Copy code
npm install
Start the frontend server by executing the command:
sql
Copy code
npm start
Backend Setup:

Navigate to the /XFaaS/backend directory.
Install all the backend packages by executing the command:
Copy code
npm install
Start the backend server by executing the command:
arduino
Copy code
npm run dev
