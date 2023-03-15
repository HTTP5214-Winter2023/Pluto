## Get a Artist

Retrieves a single artist by its Spotify ID.
- **artistid** - 22 alphanumerical Spotify Artist ID.

```javascript
var artist = await Spotify.artist("0gxyHStUsqpMadRV0Di1Qt");
```

## Get Multiple Artists

Retrieves a set of Artists specified by their artist ID.
- **artistids** - Array of Spotify Artist IDs.

```javascript
var artists = await Spotify.artists(["0gxyHStUsqpMadRV0Di1Qt","2iEvnFsWxR0Syqu2JNopAd"]);
```