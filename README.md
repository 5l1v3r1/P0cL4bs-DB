P0cL4bs-DB
==========

Search tools, exploits, dorks and much more

How to add tool, dork or exploit?

simple, just add him to json of the respective type:

For example,I can add an exploit:

First I edit the [data.json of the exploits](https://github.com/P0cL4bs/P0cL4bs-DB/blob/master/admin/exploits/data.json):

```javascript
[
  {
    "date" : "12/11/2014", 
    "exploit": "Mempodipper #2",
    "description": "Linux Local Root => 2.6.39 (32-bit & 64-bit)",
    "link": "http://www.exploit-db.com/exploits/35161",
    "lang": "C",
    "author": "Joridos"
  },
  {
    "date" : "20/08/2014", 
    "exploit": "i-FTP 2.20",
    "description": "Buffer Overflow SEH Exploit",
    "link": "http://www.exploit-db.com/exploits/35161",
    "lang": "python",
    "author": "Joridos"
  },
  {
    "date" : "21/08/2014", 
    "exploit": "Pro FTP",
    "description": "Buffer Overflow Exploit",
    "link": "http://www.exploit-db.com/exploits/35161",
    "lang": "python",
    "author": "Joridos"
  }
]
```

And add new Javascript Object with the exploit data: 


```javascript
[
  //others exploits
  {
    "date" : "08/11/2014", 
    "exploit": "name of the exploit",
    "description": "Description of the exploit",
    "link": "http://www.url.for/download/exploit",
    "lang": "python",
    "author": "name-of-author"
  }
]
```

Is the same method for others

Enjoy :stuck_out_tongue_winking_eye:
