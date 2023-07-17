import requests

# Defining the API endpoint URL
url = "http://localhost:8000/calculate-volumes"

# Defining the input data
data = {
    "solution_converted": [1000000, 100000, 1000, 1000],
    "concentration_converted": [100000, 10000, 4, 4],
    "total_volume_converted": 1000
}

# Sending the POST request
response = requests.post(url, json=data)

# Checking response status code
if response.status_code == 200:
    result = response.json()
    volumes = result["volumes"]
    fill_up_volume = result["fill_up_volume"]
    print("Volumes:", volumes)
    print("Fill-up Volume:", fill_up_volume)
else:
    print("Request failed with status code:", response.status_code)
