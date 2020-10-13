# Working application

install yarn globally if this it is not already installed
npm install -g yarn

First build and link library

cd my-library
yarn install
yarn link 
yarn dev

then go to react application folder, link library and run it

cd ../a-react-app
yarn link my-library
yarni start

This will start the app and open a tab in your browser showing the application

# Turn on chunking and see application not working...

go back to my-library and 
yarn dev:chunking

refresh the application
