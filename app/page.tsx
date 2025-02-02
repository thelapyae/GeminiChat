import ChatBot from "./components/ChatBot"
import ParticleBackground from "./components/ParticleBackground"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 relative overflow-hidden bg-background">
      <ParticleBackground />
      <ChatBot />
    </main>
  )
}

