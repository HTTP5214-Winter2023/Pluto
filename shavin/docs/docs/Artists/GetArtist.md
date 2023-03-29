# Get Artist

Retrieves a single artist by its Spotify ID.
- **artistid** - 22 alphanumerical Spotify Artist ID.

```javascript
Spotify.authorize();
var artist = await Spotify.artist("0gxyHStUsqpMadRV0Di1Qt");
```
```json
{
  "external_urls": {
    "spotify": "string"
  },
  "followers": {
    "href": "string",
    "total": 0
  },
  "genres": [
    "Prog rock",
    "Grunge"
  ],
  "href": "string",
  "id": "string",
  "images": [
    {
      "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
      "height": 300,
      "width": 300
    }
  ],
  "name": "string",
  "popularity": 0,
  "type": "artist",
  "uri": "string"
}

```