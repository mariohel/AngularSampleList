# Angular Chart List Sample - MEAN STACK APPLICATION

#Demo
http://freelyweb.com/Demos/AngularChartList/

# Install sass

reference: http://thesassway.com/beginner/getting-started-with-sass-and-compass

for windows:

1. npm install -g grunt-cli

2. npm install sass -g

3. npm install compass -g

for apple:

1. sudo npm install -g grunt-cli

2. sudo gem install sass

3. sudo gem install compass


#Install MongoDB

1. Install MongoDB
https://docs.mongodb.com/manual/installation/

2. Start MongoDB , specifing your MongoDB Directory
mongod --dbpath MongoDB\data\db

3. Import database file to your MongoDB :
mongoimport --db crossover --collection crossover --drop db/data.json


#Install

1. Install dependencies , run :
	npm install
	bower install

3. Compile scss files , run :
	grunt 

4. Start MongoDB , run :
	mongod --dbpath MongoDB\data\db

5. Start Express Server , run 
	node server.js

4. load browser : http://localhost/crossOver


#test
grunt test