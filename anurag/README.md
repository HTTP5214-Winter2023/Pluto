# Project Description
- CSGO ( a video game developed by Valve) does not save detailed stats of a user. All the stats that are available are private meaning they are only viewable to only the player. 
- [CSGOSTATS](https://csgostats.gg/) is a website that tracks individual matches and logs them by using bots. This creates a database of players match history and in depth stats public to EVERYONE.
- This website is primarily used for checking a player while in game stats for suspicious activity or just for stalking :D
- The tool I have created allows a user to retrieve only the relevant stats to determine a player is cheating and display them in basic GUI using python Tkinter.
- This tool uses Selenium to automate the browser to navigate around the website and retrieve the relevant data. Unfortunately an API is not available for this website.
- The tool uses the clipboard of the computer to paste the id of the user needed to be checked
- The tool also has a ui_multi.py file to search all the players in your game (all 10 players). This is achievable by copying the server status code which is easily retrievable in game. Once again the python code will retrieve that code from the clipboard for faster realtime usage. All 10 players and stats will be displayed in a simple UI using Tkinter
- Ideally the user would have a shortcut to launch the python fils (either single player (ui_single.py) or (ui_multi.py)

# Single User Usage Demo




https://user-images.githubusercontent.com/63444975/233135614-42ae8977-e1f8-42db-8ea3-a4483ffcc7dd.mp4





# Multi User Usage Demo




https://user-images.githubusercontent.com/63444975/233135670-788867bf-5a50-4061-bbb1-367f00781a0c.mp4



# UserTesting


Danyal 
Like: Render relevant information fast
Dislike: manually input steam id
Recommendation: Create a UI to access program and view information retrieved

Ayushi
Like: fast
Dislike: steam id inconsistent
Recommendation: Create a UI, add from clipboard

Prashant
Like: accurate information
Dislike: steam id inconsistent
Recommendation: Create a UI

Chintan
Like: Render relevant information fast
Dislike: steam id inconsistent
Recommendation: Enable multi user

Thomas
Like: Render relevant information fast
Dislike: steam id inconsistent
Recommendation: probability of cheating




# Logs

## April 12, 2023

Anurag
-UI is done
-Next step:-Finishing the multi search functions
-Blocking: No blockers


## April 5

- Anurag: Done: multi player search request
Working on: UI for multiplayer search
Next Step: automatically add from clipboard
Blocking: No Block 



## Mar 29

Anurag
-Done: UI for single player search
-Working on: using multi player search 
-Next Step: UI for multiplayer search
-Blocking: No Block


# Retrospectives

Anurag

- user test not ready
- getting some errors
- using a new package called selenium to overcome problems with cloudfare restricting web scraping.


## March 8, 2023

Anurag
Done: Getting simple player data
Working on: using multi player search
Next Step: Make the application more user friendly by launching app via shortcut and reading input from clipboard
Blocking: No Block

## Feb 22nd, 2023

Anurag: For webscraping, trying to find a way to bypass security that is restricing his access.

## Feb 15th, 2023

Anurag 
- Working with the Web Scrapping project 
- Using Python for the coding 
- blocking:researching to get the spread data -NS:working on project

## Feb 8th, 2023

Anurag

- Decided to go with Web Scraping
- Researching web scraping headless browser (Ulixee Hero) and issues with bypassing cloudflare-ddos protection
- Deciding what data to pull from website (win-rate , matches played , total wins, no. of players banned in their games, no. of FACEIT matches 
played)

## Feb 1st, 2023

Anurag
- Brainstorming project ideas that I have little/no experience with working on
- Web Assembly app 
- Web Scraping with Python
- Discord Bot
