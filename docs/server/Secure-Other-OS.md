Securing Actor Server For Other OS
===========================
Create Symlink of Actor and Actor-cli

Run the following commands
---------------------------------------

sudo ln -s /<full>/<path>/<to>/<folder>/bin/actor /bin </br>
sudo ln -s /<full>/<path>/<to>/<folder>/bin/actor /usr/bin </br>
sudo ln -s /<full>/<path>/<to>/<folder>/bin/actor-cli /usr/bin

For secure communications Actor Server have to be configured with Curve25519 keys. To generate them, use actor-cli util:

actor-cli key -c -o ~/actor-key
After generating it will instruct you what have to be added to server.conf
