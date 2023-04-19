import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"

const appId = `${process.env.REACT_APP_AGORA_APP_ID}`
const token = "007eJxTYLD3FtEU0rCIPm8ntkn3x+X+fbOd2XgZ2h+/VlsRr6LhXajAYGGampRmbp6cmmJiZJJqkpZolGyYbG6SZJiaappqYWAqo2Kf0hDIyHBDuouBEQpBfBaG3MTMPAYGACDFG3E="


export const config = {mode:"rtc", codec:"vp8", appId:appId, token:token};
export const useClient = createClient(config)
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";