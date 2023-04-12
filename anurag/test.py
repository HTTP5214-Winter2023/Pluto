from selenium import webdriver
import pyperclip
import undetected_chromedriver as uc
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import tkinter as tk


def say_hello():
    players_banned=""
    faceit_matches=""
    player_name = ""
    player_win = ""
    player_matches = ""
 
    id = pyperclip.paste()
    # id = input("Enter steamID:")



    # Code to execute if condition is False

    # service=Service('/Users/anurag/Downloads/chromedriver_mac_arm64/chromedriver')

    # Set up chromedriver and open webpage

    # driver = webdriver.Chrome('/Users/anurag/Downloads/chromedriver_mac_arm64/chromedriver')

    options = uc.ChromeOptions() 
    # options.headless = True 
    driver = uc.Chrome(use_subprocess=True, options=options) 
    # driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

    driver.get(f'https://csgostats.gg/')

    search_bar = driver.find_element("id",'search-input')
    search_bar.send_keys(id)
    search_bar.send_keys(Keys.RETURN)


    # driver.get(f'https://csgostats.gg/player/{id}#/')
    
    time.sleep(2)
    player_name = ""
    player_win = ""
    player_matches = ""

    # Find and extract the player name attribute
    player_name = driver.find_element("id",'player-name').get_attribute('innerText')
    player_win = driver.find_element(By.XPATH,'//*[@id="player-overview"]/div[1]/div[3]/div/div[2]/div[2]').get_attribute('innerText').split("%")[0].strip()
    player_matches = driver.find_element(By.XPATH,'//*[@id="player-overview"]/div[1]/div[3]/div/div[2]/div[4]/div[1]/span[2]').get_attribute('innerText')
    players_banned=""
    faceit_matches=""

    current_url = driver.current_url
    driver.get(f'{current_url}#/matches')
    time.sleep(2)
    players_banned=driver.find_element(By.XPATH,'//*[@id="match-list-show-vac"]').get_attribute('innerText').split(" ")[0]
    driver.get(f'{current_url}/faceit')
    time.sleep(2)
    faceit_matches=driver.find_element(By.XPATH,'//*[@id="player-overview"]/div[1]/div[3]/div/div[2]/div[4]/div[1]/span[2]').get_attribute('innerText')
    # Close the webdriver
    driver.quit()

    # Print the extracted player name attribute
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
    label = tk.Label(window, text="Displaying: ")
    label.pack()

    # create a label to display the variable
    pname_label = tk.Label(window, text=player_name)
    pname_label.pack()

    pwin_label = tk.Label(window, text=player_win)
    pwin_label.pack()

    pmatches_label = tk.Label(window, text=player_matches)
    pmatches_label.pack()

    pfaceit_label = tk.Label(window, text=faceit_matches)
    pfaceit_label.pack()

    pbanned_label = tk.Label(window, text=players_banned)
    pbanned_label.pack()

    # run the main loop of the window
    window.mainloop()
