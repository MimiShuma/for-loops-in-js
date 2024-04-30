let restData = {
  "host": "localhost",
  "port": 3030,
  "public": "../public/",
  "paginate": {
    "default": 10,
    "max": 50
  },
  "mongodb": "mongodb://localhost:27017/api"
}

for (const prop in restData) {        //object
  console.log(prop);                   //key
  console.log(restData[prop]);        //value
}





