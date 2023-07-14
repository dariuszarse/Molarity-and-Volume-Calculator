import requests

# Define the API endpoint URL
url = "http://localhost:8000/calculate-volumes"

# Define the input data
data = {
    "solution_converted": [1000000, 100000, 1000, 1000],
    "concentration_converted": [100000, 10000, 4, 4],
    "total_volume_converted": 1000
}

# Send the POST request
response = requests.post(url, json=data)

# Check the response status code
if response.status_code == 200:
    # Successful request
    result = response.json()
    volumes = result["volumes"]
    fill_up_volume = result["fill_up_volume"]
    print("Volumes:", volumes)
    print("Fill-up Volume:", fill_up_volume)
else:
    # Failed request
    print("Request failed with status code:", response.status_code)
