import axios from "axios";

// requests: 他のソース内でAPIのベースURLとして使用
// 今回は認証機能を実装していないので単純なURL指定だけでAPI処理が可能
export const requests = "";

// instance: 他のソース内でAPIサーバに接続するために使用
export const instance = axios.create({
  baseURL: requests,
  headers: {
    'Content-Type': 'application/json',
  }
})
