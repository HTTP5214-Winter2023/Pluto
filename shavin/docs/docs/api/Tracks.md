# Tracks

## Get a Track

Retrieves a single track by its Spotify ID.
- **trackid** - 22 alphanumerical Spotify Track ID.

```javascript
var track = await Spotify.track("6VPOVkex1tTqsMlMyH8Ebf");
```

## Get Multiple Tracks

Retrieves a set of Tracks specified by their track ID.
- **trackids** - Array of Spotify Track IDs.

```javascript
var tracks = await Spotify.tracks(["6VPOVkex1tTqsMlMyH8Ebf","3cfOd4CMv2snFaKAnMdnvK"]);
```

