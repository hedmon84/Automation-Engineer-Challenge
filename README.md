
This repository is for the Acklen Avenue QA recruiting challenge
# Challenge Description
This program is to Create a automated tests to demonstrate the functionality AND bugs of the following web
application: ​ http://www.shino.de/parkcalc/


# Available Scripts
* In the project directory, you can run:

**npm start**
* Runs the cypress app UI 

* The program will pop up and  you can see 2 test, the first test is to check, dropdowns, radiobottons,text box, price ande date
the second test is object oriented using clean code , clean tests and more user friendly. 

**npm run cypress:run**
* Will run all tests  on the terminal
* Will test create videos
* Will create test screenshots if you get a error
* Will create html test reports
* will delete previous,reports,screenshots and videos every time you run this script




# Folders to check

* Mochawesome-report = This folder has the automatic results you can open on html  if you run  npm run cypress:run
* Video= will save the video if you run  npm run cypress:run
* Screenshot= will create screenshot of an error occurred

 


# Comments
* Cypres is unable to build/deployment I try with  heroku but is not a clear info how to do it.
* Automated things used on the program prettier,eslint,githubautocommit,mocha,mochawesomereports
* Cypess use mocha and chai libraries soo I use chai to make assertions 
