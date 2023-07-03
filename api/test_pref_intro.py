from fastapi.testclient import TestClient

from main import app

###################
#Test
###################
client = TestClient(app)
def test_read_main():
    response = client.get("/pref/滋賀")
    print(response.json())
    assert response.status_code == 200

if __name__=="__main__":
    test_read_main()