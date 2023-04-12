const {createSpotify} = require('./Spotify.js');
var Spotify = createSpotify('0aa3cbf925b448228e34837ab5d53131','2331f82245fb43ae9a05dd57477fd390');
Spotify.setAuth("client_credentials")

async function getTrack(){

    // var res = await spotify.track("3zb9k8UUuKz5tYmKJvNqQA");
    // var tracks = await spotify.tracks(["7ouMYWpwJ422jRcDASZB7P","4VqPOruhp5EdPBeR92t6lQ","2takcwOaAZWiXQijPHIx7B"]);
    // var artist = await spotify.artist("0TnOYISbd1XYRBk9myaseg");
    // var artists = await spotify.artists(["2CIMQHirSU0MQqyYHq0eOx","57dN52uHvrHOxijzpIgu3E","1vCWHaC5f2uS3yhpwWbIA6"]);
    // console.log(track);
    // var res = await spotify.search("All Star",["track","album"]);
    // var res = await spotify.first.track("Jazzy techo");
    var res = await Spotify.track("Life goes on Oliver Tree");
    console.log(res);
}

getTrack();

// tracks
// get track info
// playlists
// get playlist info

// podcasts
// get podcast info

// user