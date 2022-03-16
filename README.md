# Tutorial_React_Beginners
Link: https://www.youtube.com/watch?v=Ke90Tje7VS0&amp;t=4373s

React is a Javascript framework for user interfaces.
React reacts to state changes.

Set up steps:
1- Install NodeJS
2- npm uninstall create-react-app 
3- npm uninstall -g create-react-app 
4- npm install -g create-react-app@1.5.2 
5- create-react-app --help //to check if installed correctly, should return the help info 
6- create-react-app react-app --scripts-version=react-scripts@1.1.4 
7- cd react-app 
8- npm start

If already have the repo files, then just:
1- cd react-app
2- npm i
3- npm start

For git commands:

git status                              //Displays current branch and more important info

Commits and pushes:
git commit -a -m 'React Template + Index.js HelloWorld + comments'
git push origin

Branches:
git checkout RB_1-HelloWorld            //Change to RB_1-HelloWorld branch
git checkout -b RB_1-HelloWorld         //Creates and changes to RB_1-HelloWorld branch
git branch -d RB_1-HelloWorld           //Deletes RB_1-HelloWorld branch

Merge branches:
git checkout master                     //Base branch
git merge RB_1-HelloWorld               //Branch to merge into base branch

//BONUS:
git mergetool                           //For graphical tool to resolve conflicts and merge branches.


//git commands all in one script
git add .
git commit -a -m "Single Source of Truth + Deleting Local State"
git push 

git checkout dev
git merge RB_12-raising-hande-events
git branch -d RB_12-raising-hande-events
git checkout -b RB_13-single-source-of-truth
npm run start