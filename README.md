
# wistia-js : Node.js package for Wistia APIs

Includes

- Data API
- Upload API

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
var wistiaData = Wistia.WistiaData();
var WistiaUpload = Wistia.WistiaUpload();

//Sample for Data API
wistiaData.accountRead(function(error,data){
    if(error){ console.log(error); }
    console.log(data);
});

//Sample for Upload API, i.e. using URL
WistiaUpload.upload({
    project_id: '<WISTIA_PROJECT_ID>',
    url: 'http://url/to/video'
}, function (error, data) {
    if (error) {
        console.log(error);
    }
    console.log(data);
});

//Sample for Upload API, i.e. using file stream
WistiaUpload.upload({
    project_id: '<WISTIA_PROJECT_ID>',
    file: fs.createReadStream('path/to/file')
}, function (error, data) {
    if (error) {
        console.log(error);
    }
    console.log(data);
});

```
Where **WISTIA_API_KEY** is the API Password you got from the Wistia dashboard and **WISTIA_PROJECT_ID** is the optional Project ID.

## Wistia Data API Functions

### Accounts

- `accountRead(cb)`
- `accountStats(cb)`

### Events

- `eventRead(event_key,cb)`

### Projects

- `projectShow(project_hash_id,cb)`
- `projectCreate(project_data,cb)`
- `projectList(cb)`
- `projectUpdate(project_id,project_data,cb)`
- `projectDelete(project_id,cb)`
- `projectCopy(project_id,copy_options,cb)`

### Project Sharings

- `projectSharingsList(project_id,cb)`
- `projectSharingsShow(project_id,sharing_id,cb)`
- `projectSharingsCreate(project_id,sharing_data,cb)`
- `projectSharingsUpdate(project_id,sharing_id,project_sharing_data,cb)`
- `projectSharingsDelete(project_id,sharing_id,cb)`

### Media

- `mediaShow(media_id,cb)`
- `mediaCopy(media_id,copy_options,cb)`
- `mediaShowStats(media_id,cb)`
- `mediaUpdate(media_id,media_data,cb)`
- `mediaDelete(media_hash_id,cb)`
- `mediaList(project_id,page,per_page,cb)`

### Media Customizations

- `customizationsShow(media_id,cb)`
- `customizationsCreate(media_id,customization_data,cb)`
- `customizationsUpdate(media_id,customization_data,cb)`
- `customizationsDelete(media_id,cb)`

### Captions

- `captionsIndex(media_id,cb)`
- `captionsCreate(media_id,caption_data,cb)`
- `captionsShow(media_id,lang_code,cb)`
- `captionsUpdate(media_id,lang_code,cb)`
- `captionsPurchase(media_id,cb)`

## Wistia Upload API Functions

- `upload(params,cb)`

`cb` is the callback function.
