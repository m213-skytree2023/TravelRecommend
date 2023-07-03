from fastapi.testclient import TestClient

from main import app

'''
Test Travel Introduction by ChatGPTAPI 
'''
client = TestClient(app)
def test_read_main():
    #ex) "滋賀"
    response = client.get("/pref/滋賀")
    assert response.status_code == 200
    
    #ex) "shiga"
    response = client.get("/pref/shiga")
    assert response.status_code == 200
    assert response.json()["message"] == "invalid name error"

if __name__=="__main__":
    test_read_main()