import client from "lib/api/client"

// 動作確認用
export const execTest = () => {
  return client.get("/test")
}
