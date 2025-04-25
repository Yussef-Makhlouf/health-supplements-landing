'use client'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function CookiePolicyModal() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShow(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-4 right-4 max-w-xs bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-opacity duration-300 z-50 border border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Cookie Policy</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          This website uses cookies to personalize content and analyze our traffic.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <Button
            onClick={handleAccept}
            className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700"
            size="sm"
          >
            Accept
          </Button>
          <Button
            variant="outline"
            onClick={handleDecline}
            className="w-full"
            size="sm"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  )
}