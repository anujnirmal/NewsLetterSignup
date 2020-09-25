# NewsLetterSignup
A Newsletter Sign up Web App made in Nodejs using MailChimp API to store the signups in MailChimp 


### Important Setup
1.Firstly Sign up for a Mailchimp Account
2.Goto Account > Account > Extras > API keys > Create api key > Copy It and keep it somewhere for Now (eg.Notepad)
3.Than go Audience > Manage Audience > Settings > Scroll to Bottom > Copy Unique Id for Audince in which you want to sign up your Email Signups > Save it Somewhere
4.Once you have that open app.js in a text editor and goto line 42
5.Replace yourAudienceCode with the code you got in step 3
6.Replace the 'X' in 'usX' on line 42 on the same line where you added the Audience Code to the last number on the API Key that you retieved in step 2
eg. at the end of your api key will be -us2 or any other number like 3,4 or 5 this represents the server. 
Don't think lot just replace the capital X on line 42 with the last number on your API KEY
7.Now goto line 46 where it says 'auth:' just replace 'yourapikey' with your api key 
8.Now you are ready to run

### How to use it
1.Install Node.js from [here](https://nodejs.org/)
2.Open http://localhost:3000 on your web browser
3.Fill in the detail and submit and see if it says Success or Failiure, if success check your mailchimp account and there will be data


### Deploying to server
The code is already made to be directly use in servers, just to the 'Important Setup' instructions properly and than you can deply it to your server.
I am not writing how to deploy on specific server providers as they already have very good documentations on there website, just follow that
