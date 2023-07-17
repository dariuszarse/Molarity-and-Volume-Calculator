from fastapi import FastAPI

app = FastAPI()

@app.post("/calculate-volumes")
def calculate_volumes(data: dict):
    solution_converted = data["solution_converted"]
    concentration_converted = data["concentration_converted"]
    total_volume_converted = data["total_volume_converted"]

    volumes = [0] * len(solution_converted)
    fill_up_volume = 0

    for i in range(len(solution_converted)):
        if solution_converted[i] != 0 and concentration_converted[i] != 0:
            volumes[i] = total_volume_converted / (solution_converted[i] / concentration_converted[i])

    fill_up_volume = total_volume_converted - sum(volumes)

    return {"volumes": volumes, "fill_up_volume": fill_up_volume}

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
