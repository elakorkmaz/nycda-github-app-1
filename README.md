We created a simple Github copy web application that uses data from Github.

#### TO RUN THE SERVER:

```bash
node index.js
```


then visit any github username name on localhost:3000. Cheers

If you want to see the json we are fetching in each request visit

http://localhost:3000/api/:username

###### Details

This web server makes a request to github before it serves responses to client requests.
We get a json from github, inject it to our pug templates and send the html string back to browsers
