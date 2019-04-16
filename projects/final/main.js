import requests
r = requests.get('https://api.currentsapi.services/v1/latest-news',
    headers={
        "Authorization": 'nrIqhOxRjj8R6eQ7z-0ZhFdHEBCqMzfOIR2C4s4FUSls1PFk'
    })
print(r.json())