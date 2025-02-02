"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface ChatInputProps {
  onAskQuestion: (question: string) => void
  isLoading: boolean
}

export default function ChatInput({ onAskQuestion, isLoading }: ChatInputProps) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && !isLoading) {
      onAskQuestion(inputValue.trim())
      setInputValue("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
      <Input
        type="text"
        placeholder="Ask a question..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={isLoading}
        className="w-full mb-4 border-2 border-background focus:border-background/80 rounded-xl p-3 md:p-4 text-base md:text-lg bg-white"
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-background text-black hover:bg-background/90 transition-colors rounded-xl p-4 md:p-6 text-base md:text-lg font-medium"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Thinking...
          </>
        ) : (
          "Ask Question"
        )}
      </Button>
    </form>
  )
}

