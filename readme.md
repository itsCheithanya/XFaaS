# XFaaS Dashboard Setup Guide

## Prerequisites for Running XFaaS Dashboard

Before you proceed with setting up the XFaaS dashboard, ensure the following prerequisites are met:

1. **Git Installation**:
   - Confirm that Git is installed on your system. If not, download and install Git for your respective operating system from [here](https://git-scm.com/).

2. **Node.js Installation**:
   - Install the latest version of Node.js. Visit Node.js's official website for detailed instructions on installation.

3. **AWS CLI and SDK Setup**:
   - Set up the AWS Command Line Interface (CLI) and AWS Software Development Kits (SDKs) to enable interactions with AWS services.
   - Refer to the following link for comprehensive setup instructions: [Setting up AWS CLI and SDKs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).
   - Run this command to quickly set and view your credentials, Region, and output format. The following example shows sample values.

 ```
$ aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: us-west-2
Default output format [None]: json

```

    

- **Google Chrome**: Using Chrome as a default browser is mandatory for viewing XFaaS dashboard.

## Cloning and Running XFaaS

Follow these steps to clone and run the XFaaS dashboard:

1. **Clone the Repository**:
   - Clone the GitHub repository [XFaaS](https://github.com/itsCheithanya/XFaaS.git) using the following command:
     ```bash
     git clone https://github.com/itsCheithanya/XFaaS.git
     ```
   - Alternatively, you can download the zip file of the repository and unzip it.

2. **Frontend Setup**:
   - Open your terminal and navigate to the `/XFaaS/frontend` directory using the following command:
     ```bash
     cd XFaaS/frontend
     ```
   - Install all the npm packages by executing the command:
     ```bash
     npm install
     ```
   - Start the frontend server by executing the command:
     ```bash
     npm start
     ```

3. **Backend Setup**:
   - Navigate to the `/XFaaS/backend` directory.
   - Install all the backend packages by executing the command:
     ```bash
     npm install
     ```
   - Start the backend server by executing the command:
     ```bash
     npm run dev
     ```
