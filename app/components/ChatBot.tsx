"use client"

import { useState } from "react"
import ChatInput from "./ChatInput"
import ChatResponse from "./ChatResponse"
import { Button } from "@/components/ui/button"

export default function ChatBot() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [isAsking, setIsAsking] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAskQuestion = async (q: string) => {
    setIsLoading(true)
    setError(null)
    setQuestion(q)
    setIsAsking(false)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: q }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`)
      }

      if (!data.answer) {
        throw new Error("No answer received from the API")
      }

      setAnswer(data.answer)
    } catch (error) {
      console.error("Error in handleAskQuestion:", error)
      setError(error instanceof Error ? error.message : "An unexpected error occurred")
      setAnswer("")
    } finally {
      setIsLoading(false)
    }
  }

  const handleAskAgain = () => {
    setQuestion("")
    setAnswer("")
    setError(null)
    setIsAsking(true)
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-0">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-8">
        {isAsking ? (
          <ChatInput onAskQuestion={handleAskQuestion} isLoading={isLoading} />
        ) : (
          <>
            <ChatResponse question={question} answer={answer} error={error} isLoading={isLoading} />
            <Button
              onClick={handleAskAgain}
              className="mt-6 w-full bg-background text-black hover:bg-background/90 transition-colors"
            >
              Let me ask another question please
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

