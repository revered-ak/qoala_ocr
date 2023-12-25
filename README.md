# qoala_ocr

Thai Id OCR using Google Cloud Vision API Integration
Project Setup
To integrate the Google Cloud Vision API with this project, follow these steps:

Step 1: Enable the Google Cloud Vision API

Go to the Google Cloud Console.
Create a new project or select an existing one.
In the sidebar, navigate to APIs & Services > Dashboard.
Click on the + ENABLE APIS AND SERVICES button.
Search for Cloud Vision API and enable it.
Step 2: Create API Key

In the Google Cloud Console, go to APIs & Services > Credentials.
Click on Create Credentials and choose API key.
Copy the generated API key.
Step 3: Configuring the Project

Must have NodeJS and MYSQL installed on the local machine.
Clone the project on your local.
Execute npm install on the same path as of your root directory of the downloaded project
Create a .env file in the root directory and add the following environment variable
PORT=<Any specified port>
Inside the src/config folder create a new file config.json and then add the following piece of json
{
    "development": {
        "username": "root",
        "password": "<Any password>",
        "database": "OCR_DB",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
Also inside src/config folder create a new file api_key.json and then add the API KEY obtained from the Google Cloud Vision

Once you've added your db config as listed above, go to the src folder from your terminal and execute npx sequalize db:create

Then execute npx sequelize db:migrate

API Endpoints
Upload and Create a new record

POST /api/upload
Uploads the image url to the Cloud Vision API and then fetches and stores the new record in database.

Request Body:

{
  "url": "https://pbs.twimg.com/media/FkcR718VEAAMEtL.jpg:large"
}
Response:

{
  "id": 24,
  "identification_number": "1 1037 02071 81 1",
  "name": "Miss Nattarika",
  "last_name": "Yangsuai",
  "date_of_birth": "1996-06-25T00:00:00.000Z",
  "date_of_issue": "2020-07-24T00:00:00.000Z",
  "date_of_expiry": "2023-06-24T00:00:00.000Z",
  "updatedAt": "2023-12-13T09:19:46.135Z",
  "createdAt": "2023-12-13T09:19:46.135Z"
}
Get the record using identity_num

GET /api/:identity_num
Retrieves the record of the person with the given identity number.

Response:

{
  "id": 24,
  "identification_number": "1 1037 02071 81 1",
  "name": "Miss Nattarika",
  "last_name": "Yangsuai",
  "date_of_birth": "1996-06-25",
  "date_of_issue": "2020-07-24",
  "date_of_expiry": "2023-06-24",
  "createdAt": "2023-12-13T09:19:46.000Z",
  "updatedAt": "2023-12-13T09:19:46.000Z"
}
<img width="960" alt="Screenshot 2023-12-25 211638" src="https://github.com/revered-ak/qoala_ocr/assets/86222803/2a1a30bd-e91a-4177-af78-e105686ec262">


