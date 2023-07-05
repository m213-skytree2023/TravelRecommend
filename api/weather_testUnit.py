from fastapi.testclient import TestClient
from main import app


client = TestClient(app)
def test_weather():
    response = client.post(
        "/weather",
        json={
            pref_name: "東京都"
        })
    assert response.status_code == 200

    response = client.post(
        "/weather",
        json={
            pref_name: "東京"
        })
    assert response.status_code == 200
    assert response.text == False

if __name__=="__main__":
    test_weather()
