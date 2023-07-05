import unittest
from unittest.mock import patch
import asyncio
from main import combined_route


class Pref:
    def __init__(self, pref_name):
        self.pref_name = pref_name


class TestCombinedRoute(unittest.TestCase):

    @patch('main.pref_introduction')
    @patch('main.search_images')
    def test_combined_route(self, mock_search_images, mock_pref_introduction):
        # 模拟输入数据和预期输出
        pref = Pref(pref_name="東京")
        expected_data = [
            {
                "id": 1,
                "spot": "東京タワー",
                "spot_en": "Tokyo Tower",
                "introduction": "東京のシンボルである東京タワーは...",
                "pics": [
                    "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1558240077-e33b10a16a64?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwyfHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3"
                ]
            },
            {
                "id": 2,
                "spot": "浅草寺",
                "spot_en": "Senso-ji Temple",
                "introduction": "浅草寺は東京で最も有名な寺院の一つで...",
                "pics": [
                    "https://images.unsplash.com/photo-1549283593-9f4e5590af9b?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxTZW5zby1qaSUyMFRlbXBsZXxqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1553432172-f37667f5ed15?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxTZW5zby1qaSUyMFRlbXBsZXxqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3"
                ]
            }
        ]

        # 设置模拟函数的返回值
        mock_pref_introduction.return_value = expected_data
        mock_search_images.return_value = [
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1558240077-e33b10a16a64?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwyfHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1549283593-9f4e5590af9b?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxTZW5zby1qaSUyMFRlbXBsZXxqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3",
            "https://images.unsplash.com/photo-1553432172-f37667f5ed15?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxTZW5zby1qaSUyMFRlbXBsZXxqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3"
        ]

        # 调用被测试的函数
        async def run_test():
            result = await combined_route(pref)
            # 验证预期输出与实际输出是否一致
            self.assertEqual(result, expected_data)
            # 验证模拟函数是否按预期调用
            mock_pref_introduction.assert_called_once_with(pref=pref.pref_name)
            mock_search_images.assert_called_with("Senso-ji Temple")

        asyncio.run(run_test())


if __name__ == '__main__':
    unittest.main()
