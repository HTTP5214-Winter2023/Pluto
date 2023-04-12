from selenium import webdriver
import pyperclip
import undetected_chromedriver as uc
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import tkinter as tk
import test

def multi():
    options = uc.ChromeOptions()
    driver = uc.Chrome(use_subprocess=True, options=options)
    id = pyperclip.paste()
    driver.get(f'https://csgostats.gg/player/multi')
    search_bar = driver.find_element("id",'multi-lookup-textarea')
    search_bar.send_keys(id)
    search_bar.send_keys(Keys.RETURN)
    player_win = driver.find_element(By.XPATH,'//*[@id="multi-lookup"]/div[2]/div/form/input[2]')
    player_win.click()
    time.sleep(2)
    tenplayerwrapper = driver.find_element("id",'players-wrapper')
    team1_divs = tenplayerwrapper.find_elements(By.XPATH, '//div[@class="player-item team-0"]')
    team2_divs = tenplayerwrapper.find_elements(By.XPATH, '//div[@class="player-item team-1"]')
    team_divs = team1_divs + team2_divs
    for div in team_divs:
        link2=div.find_element(By.XPATH,'.//div[4]/a[1]')
        link_href = link2.get_attribute('href')
        print(link_href)
        pyperclip.copy(link_href)
        players_banned=""
        faceit_matches=""
        player_name = ""
        player_win = ""
        player_matches = ""
    
        id = pyperclip.paste()
        # id = input("Enter steamID:")
        search_bar = driver.find_element("id",'search-input')
        search_bar.send_keys(id)
        search_bar.send_keys(Keys.RETURN)
        time.sleep(2)

        x = driver.find_element(By.XPATH,'//*[@id="player-outer-section"]/div[3]/div/span').get_attribute('innerText')
        player_name = driver.find_element("id",'player-name').get_attribute('innerText')
        if (x == "No matches have been added for this player"):
            player_win = "No player wins found"
            player_matches = "No player matches found"
            players_banned = "No player matches"
            current_url = driver.current_url
            driver.get(f'{current_url}/faceit')
            y = driver.find_element(By.XPATH,'//*[@id="player-outer-section"]/div[3]/div/span').get_attribute('innerText')
            if ( y == "No matches have been added for this player" ):
                faceit_matches = "No FaceIt matches played"
            else:
                faceit_matches = driver.find_element(By.XPATH,'//*[@id="player-overview"]/div[1]/div[3]/div/div[2]/div[4]/div[1]/span[2]').get_attribute('innerText')
            time.sleep(2)
            faceit_matches=driver.find_element(By.XPATH,'//*[@id="player-outer-section"]/div[3]/div/span').get_attribute('innerText')
        else:
        # Find and extract the player name attribute
            player_win = driver.find_element(By.XPATH,'//*[@id="player-overview"]/div[1]/div[3]/div/div[2]/div[2]').get_attribute('innerText').split("%")[0].strip()
            player_matches = driver.find_element(By.XPATH,'//*[@id="player-overview"]/div[1]/div[3]/div/div[2]/div[4]/div[1]/span[2]').get_attribute('innerText')
            print("Player Name: ", player_name)
            print("Win Percentage: ", player_win)
            print("Matches Played: ", player_matches)

            current_url = driver.current_url
        
            driver.get(f'{current_url}#/matches')
            players_banned=driver.find_element(By.XPATH,'//*[@id="match-list-show-vac"]').get_attribute('innerText').split(" ")[0]
            driver.get(f'{current_url}/faceit')
            time.sleep(2)
            y = driver.find_element(By.XPATH,'//*[@id="player-outer-section"]/div[3]/div/span').get_attribute('innerText')
            print(faceit_matches)
            if ( y == "No matches have been added for this player" ):
                faceit_matches = "No FaceIt matches played"
            else:
                faceit_matches = driver.find_element(By.XPATH,'//*[@id="player-overview"]/div[1]/div[3]/div/div[2]/div[4]/div[1]/span[2]').get_attribute('innerText')
        print("Player Name: ", player_name)
        print("Win Percentage: ", player_win)
        print("Matches Played: ", player_matches)
        print("Players Banned: ", players_banned)
        print("FaceIt Matches: ", faceit_matches)

    driver.quit()
