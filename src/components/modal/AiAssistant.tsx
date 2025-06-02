import { FormEvent, useEffect, useState } from "react";
import { itemsBgColrs, primaryTextColors } from "../../variables/styles/colors";
import ChatMessage from "./ChatMessage";
import axios from "axios";
import { BASE_API_URL } from "../../config";

const AiAssistant = () => {
    const [chatBot, setChatBot] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (sessionStorage.getItem("messages")) {
            const messageStorage = JSON.parse(sessionStorage.getItem("messages") || "") || ""
            if (messageStorage) setMessages(messageStorage)
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem("messages", JSON.stringify(messages))
    }, [messages])

    const sendMessage = async () => {
        if (!message) return;
        try {
            setMessages((prev) => [...prev, {name: "You", message}] as any)
            setLoading(true)
            const response = await axios.post(`${BASE_API_URL}/users/ai?message=${message}`)
            const responseMessage = response.data.result.response
            console.log(responseMessage)
            if (responseMessage) {
                setMessages(prev => [...prev, {name: "AI", message: responseMessage}] as any)
            } else {
                setMessages(prev => prev.slice(0, prev.length - 1))
            }
        } catch (error) {
            console.error("Request failed:", error);
            throw error;
        }
        setLoading(false)
        setMessage('')
    }

    return (
        <>
    <button
        onClick={() => setChatBot(prev => !prev)}
      className={`${itemsBgColrs} ${primaryTextColors} fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium rounded-full w-16 h-16 m-0 cursor-pointer p-0 normal-case leading-5`}
      type="button"
      aria-haspopup="dialog"
      aria-expanded="false"
      data-state="closed"
    >
      <svg
        xmlns=" http://www.w3.org/2000/svg"
        width="30"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="block align-middle"
      >
        <path
          d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
          className="border-gray-200"
        ></path>
      </svg>
    </button>

    {chatBot && <div
      style={{
        boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
      }}
      className={`mx-3 animate-in slide-in-from-bottom-20 duration-500 ease-out fixed bottom-24 z-50 right-0 mr-4 p-6 rounded-lg max-w-md h-[634px] overflow-y-hidden ${primaryTextColors} ${itemsBgColrs}`}
    >
      <div className="flex flex-col space-y-1.5 pb-6">
        <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
        <p className="text-sm text-[#6b7280] leading-3">
          Powered by Mendable and Vercel
        </p>
      </div>

      <div className="h-[474px] overflow-y-auto">
        <div
        className="pr-4 overflow-y-auto"
        style={{ minWidth: "100%", display: "table" }}
      >
        {messages.length > 0 && messages.map((item: any, index: number) => (
            <ChatMessage
                 key={index}
                name={item.name}
                message={item.message}
            />

        ))}
        {loading && 
            <ChatMessage 
                name="AI"
                message="..."
            />
        }
      </div>
      </div>
      <div className="flex items-center pt-0">
        <div className="flex items-center justify-center w-full space-x-2">
          <input
            className={`flex h-10 w-full rounded-md border dark:border-black px-3 py-2 text-sm focus:outline-none ${primaryTextColors}`}
            placeholder="Type your message"
            type="text"
            value={message}
            onChange={(e: FormEvent<HTMLInputElement>) => setMessage(e.currentTarget.value)}
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => { if (event.key == "Enter") sendMessage()}}
          />
          <button disabled={loading ? true : false} onClick={sendMessage} className={`inline-flex items-center justify-center rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 bg-white dark:bg-black h-10 px-4 py-2`}>
            Send
          </button>
        </div>
      </div>
    </div>}
  </>
    )
}

export default AiAssistant;
