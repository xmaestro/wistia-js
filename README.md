
# wistia-js : Node.js package for Wistia APIs

Includes

- Data API

Installation
--------------------------------------

Install it from npm:

```bash
npm install wistia-js
```

Usage
--------------------------------------

```js

var Wistia = require('wistia-js')('<WISTIA_API_KEY>');
var wistiaData = Wistia.WistiaData;

wistiaData.accountRead(function(error,data){
        if(error){ console.log(error); }
        console.log(JSON.parse(data));
});

```

Where **WISTIA_API_KEY** is the API Password you got from the Wistia dashboard.

## Wistia Data API Functions

- `accountRead(cb)`
- `accountStats(cb)`
- `eventRead(event_key,cb)`
- `projectShow(project_hash_id,cb)`
- `projectCreate(project_data,cb)`
- `projectList(cb)`
- `projectUpdate(project_id,project_data,cb)`
- `mediaShow(media_id,cb)`
- `mediaShowStats(media_id,cb)`
- `mediaUpdate(media_id,media_data,cb)`
- `mediaDelete(media_hash_id,cb)`
- `mediaList(project_id,page,per_page,cb)`

`cb` is the callback function.
