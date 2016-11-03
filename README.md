
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
- `projectDelete(project_id,cb)`
- `projectCopy(project_id,copy_options,cb)`

- `projectSharingsList(project_id,cb)`
- `projectSharingsShow(project_id,sharing_id,cb)`
- `projectSharingsCreate(project_id,sharing_data,cb)`
- `projectSharingsUpdate(project_id,sharing_id,project_sharing_data,cb)`
- `projectSharingsDelete(project_id,sharing_id,cb)`

- `mediaShow(media_id,cb)`
- `mediaCopy(media_id,copy_options,cb)`
- `mediaShowStats(media_id,cb)`
- `mediaUpdate(media_id,media_data,cb)`
- `mediaDelete(media_hash_id,cb)`
- `mediaList(project_id,page,per_page,cb)`

- `customizationsShow(media_id,cb)`
- `customizationsCreate(media_id,customization_data,cb)`
- `customizationsUpdate(media_id,customization_data,cb)`
- `customizationsDelete(media_id,cb)`

- `captionsIndex(media_id,cb)`
- `captionsCreate(media_id,caption_data,cb)`
- `captionsShow(media_id,lang_code,cb)`
- `captionsUpdate(media_id,lang_code,cb)`
- `captionsPurchase(media_id,cb)`

`cb` is the callback function.

## Note
This is a work in progress and I try to keep everything updated, but, if you still find something that needs updated please feel free to report a bug or create a PR.
