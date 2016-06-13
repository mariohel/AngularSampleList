# CrossOver Test

Steps to Install the test:<br>
1. Unzip Code folder

2. run --> npm install

3. run --> bower install

4. in case you are installing application locally , ie: localhost/crossOver , make sure that base url in root index.html is same as your root application , ie : "/crossOver/" , otherwise , it is as should be "/" which is the root directory of production site.

5. run --> grunt 
to compile scss files

# To Run sass

http://thesassway.com/beginner/getting-started-with-sass-and-compass

To install grunt

for windows
1. install ruby

http://rubyinstaller.org/

2. install gem

https://rubygems.org/pages/download 

	1. Download from above
	2. Unpack into a directory and cd there
	3. Install with: ruby setup.rb (you may need admin/root privilege)
	4. or just click setup file to install

3. run these commands

gem install compass

npm install -g grunt-cli

npm install sass -g

npm install compass -g

for apple
sudo npm install -g grunt-cli

sudo gem install sass

sudo gem install compass


To compile sass file at once use below command 

grunt

To start watcher to watch the changes in the scss and recompile them use below command

grunt sasswatch

# ReWriting URL

to make the rewriting URL works fine locally : ie if your URL is localhost/crossover open .htaccess file and change :

RewriteBase / 

to : 

RewriteBase /crossover



