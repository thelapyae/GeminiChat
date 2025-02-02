import { Loader2 } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface ChatResponseProps {
  question: string
  answer: string
  error: string | null
  isLoading: boolean
}

export default function ChatResponse({ question, answer, error, isLoading }: ChatResponseProps) {
  return (
    <div className="space-y-4">
      <div className="border-l-4 border-background pl-4">
        <h2 className="text-lg md:text-xl font-bold mb-2">Q: {question}</h2>
      </div>
      {error ? (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm md:text-base">{error}</div>
      ) : isLoading ? (
        <div className="flex items-center justify-center p-4">
          <Loader2 className="h-5 w-5 md:h-6 md:w-6 animate-spin mr-2" />
          <span className="text-sm md:text-base">Thinking...</span>
        </div>
      ) : (
        <div className="text-base md:text-lg leading-relaxed prose max-w-none">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      )}
    </div>
  )
}

