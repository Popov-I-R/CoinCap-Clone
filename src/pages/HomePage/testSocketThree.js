import { API_KEY } from "../../secrets";

export const connection = new WebSocket(
          `wss://api.coinranking.com/v2/real-time/rates?x-access-token=${API_KEY}`
        );