
This repository is for the Acklen Avenue QA recruiting challenge
# Challenge Description
This program is to Create a automated tests to demonstrate the functionality AND bugs of the following web
application: ​ http://www.shino.de/parkcalc/


# Available Scripts
* In the project directory, you can run:

**npm start**
* Runs the cypress app UI 


* The page will pop up and you can check the 2 test  first test all the controls of the webpage and the second is more structured a user friendly for make test.
* No reports automatic available with this npm run 

**npm run cypress:run**
* Will run all tests headlessly in the browser 
* will create video, screenshots and automatic reports




**Folders to check:**

* Mochawesome-report = This folder has the automatic results you can open on html  if you run  npm run cypress:run
* Video= will save the video if you run  npm run cypress:run
* Screenshot= will create screenshot of an error occurred

 


# Comments
* Cypres is unable to build/deployment I try with  heroku but is not a clear info how to do it.
* Automated things used on the program prettier,eslint,githubautocommit,mocha,mochawesomereports
* Cypess use mocha and chai libraries soo I use chai to make assertions 
