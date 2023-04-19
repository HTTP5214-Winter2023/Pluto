from selenium import webdriver
import pyperclip
import undetected_chromedriver as uc
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import NoSuchElementException
import tkinter as tk
from tkinter import ttk
import test





def run():
    window = tk.Tk()
    frame = ScrollableWindow(window)
    window.title("Display User Stats")
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
    z = []
    for div in team_divs:
        z.append(div.find_element(By.XPATH,'.//div[4]/a[1]').get_attribute('href'))
    i = 0
    for div in z:
        i=i+1
        print(i)
        pyperclip.copy(div)
        players_banned=""
        faceit_matches=""
        player_name = ""
        player_win = ""
        player_matches = ""
    
        id = pyperclip.paste()
        search_bar = driver.find_element("id",'search-input')
        search_bar.send_keys(id)
        search_bar.send_keys(Keys.RETURN)
        time.sleep(3)
        player_name = driver.find_element("id",'player-name').get_attribute('innerText')
        try:
            player_win = driver.find_element(By.XPATH,'//*[@id="player-overview"]/div[1]/div[3]/div/div[2]/div[2]').get_attribute('innerText').split("%")[0].strip()
            player_matches = driver.find_element(By.XPATH,'//*[@id="player-overview"]/div[1]/div[3]/div/div[2]/div[4]/div[1]/span[2]').get_attribute('innerText')
            players_banned=driver.find_element(By.XPATH,'//*[@id="match-list-show-vac"]').get_attribute('innerText').split(" ")[0]
        except NoSuchElementException:
            player_win = "No player wins found"
            player_matches = "No player matches found"
            players_banned = "No player matches"

        current_url = driver.current_url
        driver.get(f'{current_url}/faceit')
        try:
            faceit_matches = driver.find_element(By.XPATH,'//*[@id="player-overview"]/div[1]/div[3]/div/div[2]/div[4]/div[1]/span[2]').get_attribute('innerText')
        except NoSuchElementException:
            faceit_matches = "No FaceIt matches played"
        pname_label = ttk.Label(frame.scrollable_frame, text=f"Player: {player_name}")
        pname_label.pack()

        pwin_label = ttk.Label(frame.scrollable_frame, text=f"Wins: {player_win}")
        pwin_label.pack()

        pmatches_label = ttk.Label(frame.scrollable_frame, text=f"Total Played: {player_matches}")
        pmatches_label.pack()

        pfaceit_label = ttk.Label(frame.scrollable_frame, text=f"FaceIt Matches: {faceit_matches}")
        pfaceit_label.pack()

        pbanned_label = ttk.Label(frame.scrollable_frame, text=f"Player Banned: {players_banned}\n")
        pbanned_label.pack()

        print("Player Name: ", player_name)
        print("Win Percentage: ", player_win)
        print("Matches Played: ", player_matches)
        print("Players Banned: ", players_banned)
        print("FaceIt Matches: ", faceit_matches)
    driver.quit()
    frame.pack()
    window.mainloop()
