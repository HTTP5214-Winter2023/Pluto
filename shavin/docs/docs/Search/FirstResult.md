---
sidebar_position: 2
---

# Get First Result

If you want to search but only want the single first result, you can use the **first** operaiton. This will return you the first result of your search, In a way similar to "I'm Feeling Lucky".


The Response is based on the category.

## Get First Track
See [Get Track](../Tracks/GetTrack).
```javascript
Spotify.authorize();
track = await Spotify.first.track("All Star"); 
```

## Get First Artist
See [Get Artist](../Artists/GetArtist).

```javascript
Spotify.authorize();
track = await Spotify.first.artist("Smash Mouth"); 
```

## Get First Playlist
See [Get Playlist](../Playlists/GetPlaylist).

```javascript
Spotify.authorize();
track = await Spotify.first.playlist("All Star"); 
```

## Get First Podcast
See [Get Artist](../Podcasts/Podcasts).

```javascript
Spotify.authorize();
track = await Spotify.first.podcast("Joe Rogan"); 
```

