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


def run():
    players_banned=""
    faceit_matches=""
    player_name = ""
    player_win = ""
    player_matches = ""
 
    id = pyperclip.paste()

    # Set up chromedriver and open webpage


    options = uc.ChromeOptions()  
    driver = uc.Chrome(use_subprocess=True, options=options) 

    driver.get(f'https://csgostats.gg/')

    search_bar = driver.find_element("id",'search-input')
    search_bar.send_keys(id)
    search_bar.send_keys(Keys.RETURN)

    
    
    player_name = ""
    player_win = ""
    player_matches = ""

    time.sleep(2)
    #test
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
        
    # Close the webdriver
    driver.quit()




    # Print the extracted player stats 
    print("Player Name: ", player_name)
    print("Win Percentage: ", player_win)
    print("Matches Played: ", player_matches)
    print("Players Banned: ", players_banned)
    print("FaceIt Matches: ", faceit_matches)

    window = tk.Tk()
    window.geometry("800x800")

    # set the window title
    window.title("Display User Stats")

    # create a label to display the variable
    label = tk.Label(window, text="STATS")
    label.pack()

    # create a label to display the variable
    pname_label = tk.Label(window, text=f"Player: {player_name}")
    pname_label.pack()

    pwin_label = tk.Label(window, text=f"Wins: {player_win}")
    pwin_label.pack()

    pmatches_label = tk.Label(window, text=f"Total Played: {player_matches}")
    pmatches_label.pack()

    pfaceit_label = tk.Label(window, text=f"FaceIt Matches: {faceit_matches}")
    pfaceit_label.pack()

    pbanned_label = tk.Label(window, text=f"Player Banned: {players_banned}\n")
    pbanned_label.pack()

    # run the main loop of the window
    window.mainloop()
