---
sidebar_position: 2
---
# Usage

## Import the library

Import the `createSpotify()` function, to create the Spotify Instance. By default, it uses [Client Credentail Flow](https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/). The following example uses `require` library. The function accepts 2 paramenters:
- **CLIENT_ID** : Your Spotify Client ID.
- **CLIENT_SECRET** : Your Spotify Client Secret.

Returns an instance of the **Spotify** class.

```javascript
const { createSpotify } = require("./Spotify.js");

var Spotify = createSpotify("CLIENT_ID","CLIENT_SECRET");
```

## Authentication Flow

By default, the wrapper authenticates using **client_credentials** flow. You can specify which Flow to use using the `setAuth()` function. The following authentication flows are acceptable:

- **client_credentials** - Client Credential Flow

```javascript
Spotify.setAuth("client_credentials") // Default
```

## Authorize

Spotify sets a **1 hour limit** on API calls, requiring you to re-authenticate before proceeding. To do this, it is advised you `authorize()` your Spotify instance at the top of your functions, before making calls. 

```javascript
function getTrack(){
   Spotify.authorize(); 
   var track = Spotify.track("6VPOVkex1tTqsMlMyH8Ebf");
   // ...
}
```
