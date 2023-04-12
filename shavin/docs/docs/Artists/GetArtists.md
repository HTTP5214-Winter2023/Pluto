# Get Several Artists

Get Spotify catalog information from multiple Artists.

- **artistids** - Array of Spotify Artist IDs.

```javascript
Spotify.authorize();
var artists = await Spotify.artists(["0gxyHStUsqpMadRV0Di1Qt","2iEvnFsWxR0Syqu2JNopAd"]);
```
```json
{
  "artists": [
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
  ]
}
```