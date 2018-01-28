from bs4 import BeautifulSoup
from urllib.request import *
import json

url = 'https://www.fandango.com/'
soup = BeautifulSoup(urlopen(url).read(), 'html.parser')
movie_list = soup.find('ol', class_='carousel-items js-items')

movies = []

for item in movie_list.findAll('li'):
    movie = {}
    movie['title'] = item.div.div.a.text
    movie['image'] = 'https:' + item.div.a.img['src']
    movie['overview'] = url + item.div.a['href']
    movies.append(movie)

print(json.dumps(movies))