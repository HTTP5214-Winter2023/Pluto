---
sidebar_position: 1
---

# Search for Item

Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string.

Returns an Array of results, divided into the categories specified. Each category can have up to 20 results.

- **term** - Search query term 
- **(Optional) types** - List of categories to search across.
  
| Category | Name |
|---|---|
| **album**  | Albums  |
| **artist** | Artists |
| **podcast** | Podcasts |
| **show** | Podcast Shows |
| **track** | Tracks |


```javascript
var search = await Spotify.search("All Star", ["track","album","artist"]);
```

```bash
# Response (200)
[
    tracks: {
        # ...
    },

    albums: {
        # ...
    },

    artists: {
        # ...
    }
]
```