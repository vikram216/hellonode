hellonode
================================================================================

A "Hello World" server in node.js sample for Google Cloud Platform.
This repo contains a complete sample of a node.js program that you can deploy on Google Cloud Platform.
Before jumping into the code, make sure you have a Google Account. If you don't already have a Google Account (Gmail or Google Apps), you must [create one](https://accounts.google.com/SignUp). Sign-in to [Google Cloud Platform console](http://console.cloud.google.com) and create a new project
1. Activate google cloud shell                                       
   ![Alt Text](https://github.com/vikram216/mygitimages/blob/master/gcp%20activate%20cloud%20shell.gif)                  

2. Clone the hellonode sample app repository by typing the following git command in the shell                                        
  `git clone https://github.com/vikram216/hellonode.git`
3. Change the directory to hellonode                
  `cd hellonode`
  
Test the code on sandbox provided in App Engine
------------------------------------------------
1. Install dependencies for this project by entering the following command:                 
  `npm install`
2. Run the start script            
  `npm start`
3. Click the Web preview button on the google cloud shell to open the deployed web app in a new tab

You can see the Hello World message from the sample app displayed in the page.     
In google cloud shell, press Ctrl+C to exit the web server.

Deploy and run Hello World on App Engine
-----------------------------------------
To deploy your app to the App Engine flexible environment:   
1. Deploy the hellonode app by running the following command from the hellonode directory:        
  `gcloud app deploy`      
2. Launch your browser and view the app at http://<YOUR_PROJECT_ID>.appspot.com, by running the following command:      
  `gcloud app browse`
