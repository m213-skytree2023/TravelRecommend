import unittest
from unittest.mock import patch
from Usplash_api import get_images

class TestGetImages(unittest.TestCase):

    @patch('Usplash_api.requests.get')
    def test_get_images(self, mock_get):
        # Define a mock response from the Unsplash API
        mock_response = {
            "results": [
                {
                    "urls": {
                        "raw": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxUb2t5b3xqYXwwfHx8fDE2ODg0NTE2MTV8MA&ixlib=rb-4.0.3"
                    }
                },
                {
                    "urls": {
                        "raw": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwyfHxUb2t5b3xqYXwwfHx8fDE2ODg0NTE2MTV8MA&ixlib=rb-4.0.3"
                    }
                },
                {
                    "urls": {
                        "raw": "https://images.unsplash.com/photo-1554797589-7241bb691973?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwzfHxUb2t5b3xqYXwwfHx8fDE2ODg0NTE2MTV8MA&ixlib=rb-4.0.3"
                    }
                },
                {
                    "urls": {
                        "raw": "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw0fHxUb2t5b3xqYXwwfHx8fDE2ODg0NTE2MTV8MA&ixlib=rb-4.0.3"
                    }
                },
                {
                    "urls": {
                        "raw": "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw1fHxUb2t5b3xqYXwwfHx8fDE2ODg0NTE2MTV8MA&ixlib=rb-4.0.3"
                    }
                }
            ]
        }

        # Configure the mock response
        mock_get.return_value.json.return_value = mock_response

        # Define the JSON data for testing
        query_data = {
            "query": ["Tokyo"]
        }

        # Call the function being tested
        result = get_images(query_data)

        # Assert the expected JSON response
        expected_response = '[{"id": 1, "spot": "Tokyo", "pics": ["https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxUb2t5b3xqYXwwfHx8fDE2ODg0NTE2MTV8MA&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwyfHxUb2t5b3xqYXwwfHx8fDE2ODg0NTE2MTV8MA&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1554797589-7241bb691973?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwzfHxUb2t5b3xqYXwwfHx8fDE2ODg0NTE2MTV8MA&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw0fHxUb2t5b3xqYXwwfHx8fDE2ODg0NTE2MTV8MA&ixlib=rb-4.0.3", "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw1fHxUb2t5b3xqYXwwfHx8fDE2ODg0NTE2MTV8MA&ixlib=rb-4.0.3"]}]'
        self.assertEqual(result, expected_response)

if __name__ == '__main__':
    unittest.main()
