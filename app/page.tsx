"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Monitor } from "lucide-react"

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="fixed top-4 right-4 p-3 rounded-lg bg-background border border-border">
        <Monitor className="h-5 w-5" />
      </button>
    )
  }

  return (
    <div className="fixed top-4 right-4 flex gap-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-3 rounded-lg border transition-colors ${
          resolvedTheme === "light" 
            ? "bg-primary text-primary-foreground border-primary" 
            : "bg-background border-border hover:bg-accent"
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-3 rounded-lg border transition-colors ${
          resolvedTheme === "dark" 
            ? "bg-primary text-primary-foreground border-primary" 
            : "bg-background border-border hover:bg-accent"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-5 w-5" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-3 rounded-lg border transition-colors ${
          theme === "system" 
            ? "bg-primary text-primary-foreground border-primary" 
            : "bg-background border-border hover:bg-accent"
        }`}
        aria-label="System mode"
      >
        <Monitor className="h-5 w-5" />
      </button>
    </div>
  )
}

function AppWrapper() {
  const [AppComponent, setAppComponent] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    import("../App")
      .then((module) => {
        setAppComponent(() => module.default)
      })
      .catch((err) => {
        console.error("Failed to load App component:", err)
        setError(err.message)
      })
  }, [])

  if (error) {
    return (
      <div className="min-h-screen bg-background text-foreground p-8">
        <ThemeToggle />
        <h1 className="text-4xl font-bold mb-4 text-destructive">Error Loading App</h1>
        <p className="text-lg text-muted-foreground mb-4">
          There was an error loading the main application:
        </p>
        <div className="p-4 border border-destructive rounded-lg bg-destructive/10">
          <p className="text-sm font-mono">{error}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Working Features:</h2>
          <ul className="space-y-1 text-muted-foreground">
            <li>✅ Theme Provider</li>
            <li>✅ Tailwind CSS</li>
            <li>✅ Next.js</li>
            <li>✅ Dynamic Imports</li>
          </ul>
        </div>
      </div>
    )
  }

  if (!AppComponent) {
    return (
      <div className="min-h-screen bg-background text-foreground p-8 flex items-center justify-center">
        <ThemeToggle />
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading application...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <ThemeToggle />
      <AppComponent />
    </>
  )
}

export default function HomePage() {
  return <AppWrapper />
}