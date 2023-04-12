async function call(endpoint,headers){
    var res = await fetch(endpoint,{
        headers
    }).then(r => r.json());

    return res;
}

class Spotify {

    constructor(_id, _secret){
        this.client_id = _id;
        this.secret = _secret;
        this.setAuth('client_credentials');
        this.authorize();
    }

    /**
     * Sets the authentication method used to authorize
     * @param {["client_credentials"]} method - Auth method
     */
    setAuth(method){
        switch(method){
            case "client_credentials":
            default:
                this.authFlow = "client_credentials";
            break;
        }
    }

    /**
     * Validates access to Spotify API. Required before usage.
     * @returns {Boolean} Authorization result
     */
    async authorize(){
        var res = await fetch(`https://accounts.spotify.com/api/token?grant_type=${this.authFlow}`,{
            method:'post',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Authorization':'Basic ' + (new Buffer(this.client_id + ':' + this.secret).toString('base64'))
            },
        })
        .catch(e => { return false; })
        .then(d => d.json());


        if(!res) return false;

        this.token = res.access_token;
        this.headers = {
            'Authorization':'Bearer '+this.token,
            'Content-Type':'applciation/json'
        }
        return true;
    }

    // @@ GENERAL @@

    /**
     * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string.
     * @param {String} term Search query term 
     * @param {["album","track","podcast","artist","show"]} types - Array. List of items to search across
     * @returns Search results
     */
    async search(term,types=["album","track","podcast","artist","show"]){
        await this.authorize();

        var res = await call("https://api.spotify.com/v1/search?q="+term+"&type=" + types.reduce((acc,cv)=>acc+","+cv), this.headers);
        if(res['error']) return res;

        var searchResults = {};
        for(var type in res){
            searchResults[type] = res[type].items;
        }
        
        return searchResults;
    }

    first = {
        track: async term => {
            var res = await this.search(term, ["track"]);
            if(!res) return null;
            return res.tracks[0];
        },

        artist: async term => {
            var res = await this.search(term,["artist"]);
            if(!res) return null;
            return res.artists[0];
        },

        podcast: async term => {
            var res = await this.search(term,["podcast"]);
            if(!res) return null;
            return res.podcasts[0];
        },

        playlist: async term => {
            var res = await this.search(term, ["playlist"]);
            if(!res) return null;
            return res.playlists[0];
        }
    }

    // @@@ ARTISTS @@@

    /**
     * Gets a single artist by ID
     * @param {String} artistid - ID of the artist
     * @returns artist data
     */
    async artist(artistid){
        var res = await call("https://api.spotify.com/v1/artists/" + artistid, this.headers);
        return res;
    }

    /**
     * Gets a list of artists specified by their artist IDs
     * @param {Array<ArtistId>} artists - Array of Artist IDS
     * @returns Array of Tracks
     */
    async artists(artists=[]){
        if(!artists.length) return null;
        if(artists.length==1) return this.artist(artists[0]);

        var query = artists.reduce((acc,cv) => acc+","+cv);
        var res = await call("https://api.spotify.com/v1/artists?ids=" + query, this.headers);
        return res;
    }

    // @@@ TRACKS @@@

    /**
     * Gets a single track by ID
     * @param {String} term - ID of the track or Search term
     * @returns track data
     */
    async track(term){

        console.log("this is the term",term);
        var res;

        if(!isId(term)) res = await this.first.track(term);
        else {
            await this.authorize();
            res = await call("https://api.spotify.com/v1/tracks/" + term, this.headers);
        }

        return res;
    }

    /**
     * Gets a list of tracks specified by their track IDs
     * @param {Array<TrackId>} tracks - Array of Track IDS
     * @returns Array of Tracks
     */
    async tracks(tracks){
        if(!tracks.length) return null;
        if(typeof(tracks) == "string") {
            var track = track;
            var res = await this.search(track,['track']);
            return res;
        }

        var res;

        if(!isId(term)) res = await this.first.track(term);

        var query = tracks.reduce((acc,cv) => acc+","+cv);
        var res = await call("https://api.spotify.com/v1/tracks?ids=" + query, this.headers);
        return res;
    }

    // @@@ PLAYLISTS @@@

    /**
     * Gets a single playlist by ID
     * @param {String} term - ID of the playlist or search term
     * @returns playlist data
     */
    async playlist(term){
        await this.authorize();

        var res;

        if(!isId(term)) res = await this.first.playlist(term);

        var res = await call("https://api.spotify.com/v1/playlists/" + playlistid, this.headers);
        return res;
    }

    async featuredPlaylists(){
        var res = await call("https://api.spotify.com/v1/browse/featured-playlists", this.headers);
        return res;
    }

    /**
     * Print the current spotify credentials in string format.
     * @returns Client ID and Secret
     */
    toString(){
        return `ID: ${this.client_id}, SECRET: ${this.secret}`
    };
}

/**
 * Creates a new instance of the Spotify object
 * @param {string} clientid -  ID of the client app
 * @param {string} clientsecret - Secret of the client app
 * @returns {Spotify} Spotify object
 */
function createSpotify(clientid, clientsecret) {
    return new Spotify(clientid, clientsecret);
}

function isId(query){
    var idRegEx = /^[a-zA-z0-9]{22}$/;
    return idRegEx.test(query);
}

module.exports = {
    createSpotify
};