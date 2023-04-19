# Usability Test & Results

## Scenario

Users will take the role of a developer who is looking to use the Spotify Wrapper to develop an app. They will be 
given a test environment with the Spotify Credentials (secret and ID) provided. Testers will be given a set of 
5 tasks that willl test the various features of the Wrapper. They will have access to the Base Spotify.js file and
The documentation site. the 5 questsion will be as such:

1. What authentication method is currently supported? (client_credentials)
2. You have created a Spotify App in the Dashboard, and have got the following credentials (Provide credentials). Create an instance of the Spotify object, and enter the string representation of the object. ("ID: Client ID, SECRET: Client Secret")
3. What is the name of the track with the ID 04KsMCb9PZE2S0AtUU8Jhb? paste it below. ("April Showers")
4. What is the Track ID for the song "Life Goes On" by Oliver Tree? paste the result below. ("0eu4C55hL6x29mmeAjytzC")
5. What is the title of the first Track result when I search "Jazzy techo" (Changes daily, will need to research before test)

## Participants
Participants will have a varying degree of familiarity with spotify API, and with varying degree of Documenation skills.
2 participants have agreed to take part in these tests. 

## Instructions
- the Spotify Wrapper is meant to simplify the steps needed to use the Spotify API
- The test assumes the user has done all of the setup with spotify (through the developer dashboard), and will not be 
required to interact with spotify directly
- Many of the endpoints in the wrapper are similar to core functions of Spotify, these include
 - Tracks
 - Playlists
 - Artists
 - Podcasts (Episodes)
- During this test, you will focus on Authentication, Data Retrival, Abstract Data Retrieval and Search Functionality
- Participants will be asked to narrate their thought process during the test
- They will be measured on
  - Time to complete the task
  - Real time feedback/narrating thought process
  - Feedback

## Likes/Dislikes/Recommendations

### likes
- the .track() format was familiar and easy
- documentation had cut and paste ability
- search features was really intersting  and useful
- authentication was fast

### dislikes
- search function was not clear
- .authorize() was annoying 
- didn't know what the track ID was

### Reccomendations
- remove .authorize() before the call
- documentation could use restructure
- search using .track() instead of search()
- consume the response, raw data has too much unecessary data, hard to read in the console  

## Observations
- Participants were not sure if they completed the task, there was no feedback confirming it was done
- Participants often skiped past descriptions and went straight to code examples, which did not have all of the
needed features (authorize was assumed in the docs)
- Participants often assumed the right answer, instead of checking the docs. Spent most of the time in the editor 
looking for answers
- Both participants completed the final task without needing the use of the .first feature. However it took 
a greater amount of code and problem solving to retrieve that answer. The .first feature was not referenced

## Findings

The wrapper proivdes a well needed abstraction over the current method of interaction with the Spotify API. It 
The wrapper in its current iteration is not new-user friendly, as it makes assumptions that the user has used other
libraries (such as MongoDB and KnexJS). Much of the documentation should be integrated into the editor itself, through
JSDocs (intellisense) or simply having intuitive syntax (I want to to get a track from spotify called "Life goes on" 
so Spotify.track("Life goes On") should work).
