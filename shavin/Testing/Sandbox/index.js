
// TEST 2: Using the credentials, create an instance of the spotify wrapper
/* -------------- PLACE CODE HERE ------------------ */

// # -- IMPORTS -- #


// # -- #

// CREATE SPOTIFY INSTANCE and print the results to a string
// use the credentials:
// CLIENT ID: 0aa3cbf925b448228e34837ab5d53131
// CLIENT SECRET: 2331f82245fb43ae9a05dd57477fd390
var Spotify;



/* -------------------------------------------------- */
async function Test3()
{
    /* What is the name of the track with the ID 04KsMCb9PZE2S0AtUU8Jhb ? */
    /* -------------- PLACE CODE HERE ------------------ */
    var tracktitle;

    await Spotify.authorize();
    var track = await Spotify.track("04KsMCb9PZE2S0AtUU8Jhb");
    //console.log(track.name);

    /* -------------------------------------------------- */
    console.log(track);
 
}

async function Test4()
{
    /* What is the Track ID for the song "Life Goes On" by Oliver Tree? */
    /* -------------- PLACE CODE HERE ------------------ */
    var track;
    await Spotify.authorize();


    /* -------------------------------------------------- */
    console.log(track);

}

async function Test5()
{
    /* What is the title of the FIRST Track result when I search "Jazzy techo"? */
    /* -------------- PLACE CODE HERE ------------------ */
    var tracktitle;
    await Spotify.authorize();


    /* -------------------------------------------------- */
    console.log(tracktitle);
}


// Test3();
// Test4();
// Test5();