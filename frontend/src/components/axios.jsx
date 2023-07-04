import axios from "axios";

// requests: 他のソース内でAPIのベースURLとして使用
// 今回は認証機能を実装していないので単純なURL指定だけでAPI処理が可能
export const requests = "http://127.0.0.1:8000/";

axios.defaults.withCredentials = true;

// instance: 他のソース内でAPIサーバに接続するために使用
export const instance = axios.create({
  baseURL: requests,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  },
});
