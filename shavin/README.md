## Shavin - Spotify API wrapper module
This repo will be used to store my progress on the development of my Spotify API Wrapper module

## NExt Step 
Audience Research for use cases of spotify API wrapper

## Feb 15
Researched modular design ( how to do var spotify = new Spotify())
Scaffolded Environment
- will develop 
 - get track
 - get album
 - get artist
 - get podcast
 - get playlist

## Feb 22
Added the following endpoits
- Get Track
- Get Tracks
- Get Playlist
- Get Artist
- Get Artists
Will be using Client Credential flow to start, as no authentication is needed. It will not be able to access user information, only publically available.

## Mar 13
Added JSDocs to help with MVP documentation. Also, added a search interface that accepts
a search term, and the type of item. 

## Mar 15
Will need to research How to do documentation website using Docusaurus. TH eplan for usability testing
is to create a single HTML page environment "get Track information for this song using the JS library. Use the documentation page to help."

A single page, with prompt and text box that looks like code.

Setup Docusaurus for Documentation Reference. Added Getting Started steps and structure for Track, PLaylist, Artist and Podcast Endpoints.

Will need to futher flesh out documentation pages, with examples and Class Definitions.

## Mar 22
Goal is to perform user testing. I built documentation using Docusaurus, and a testing suite for the testing. 

The idea is that a user will go through the steps, using documentation and the editor to answer the qestions

got 2 test done, overall poor performance from the documentaiton and testing suite, was unintuitive and caused more confusion and frustration than anything

will need to improve the workflow and focus the test on the the wrapper, not the suite

## Mar 29

Reviewed code for others, updated Spotify wrapper to now have the search integrated into track() and playlist() functions, rather than the .first. by default, you can retrieve the first result by searching for a track. Though this introduces a level of variability that might result in incorrect results.

## April 5

Performed Usability testing, created a suite for testing environment. users will be asked to interact with wrapper and documentation then psot their request in the suite to verify if it was correct. there will be a list of 5 questions as outlined in the usability report.

Overall, the testing was effective as I will need to implement features that simplify the endpoints. for instance, rather than only having a dedicated search() feature, have a first-search option added to track() so that a user could just use Spotify.track("Song name") rather than just the ID. Testers showed this is the assumed behavior.

Documentation will also need to be updated to include a working example of code, rather than a single line. Users would copy code directly from the docs, without necesarrily reading all of the text that explained the steps prior. 

Authoization will also need to be simplified, as it is unintuitive to authorize at the top of the function.

## April 12
Moved authroization to tracks, now user only needs to call Spotify.track() without needing to specify authorize(). Removed the requirement for specififying authorization type. if it is not sp[ecified it implies client credentials flow.
