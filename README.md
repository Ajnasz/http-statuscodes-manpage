```sh
node generate.js > http.md
pandoc http.md -s -t man -o http.7

sudo mkdir -p /usr/local/share/man/man7
sudo cp http.7 /usr/local/share/man/man7/
mandb
man http
```
