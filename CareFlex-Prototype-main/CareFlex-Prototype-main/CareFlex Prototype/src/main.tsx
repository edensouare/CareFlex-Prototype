
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import type { Session } from '@supabase/supabase-js'
import App from './App'
import SignIn from './SignIn'
import { supabase } from './supabase'
import './index.css'

const WELCOME_KEY = 'careflex-welcome-dismissed'

function Root() {
  const [session, setSession] = useState<Session | null | undefined>(undefined)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, nextSession) => {
      setSession(nextSession)

      if (event === 'SIGNED_IN') {
        if (sessionStorage.getItem(WELCOME_KEY) !== 'yes') {
          setShowWelcome(true)
        }
      }

      if (event === 'SIGNED_OUT') {
        sessionStorage.removeItem(WELCOME_KEY)
        setShowWelcome(false)
      }
    })

    return () => data.subscription.unsubscribe()
  }, [])

  function dismissWelcome() {
    sessionStorage.setItem(WELCOME_KEY, 'yes')
    setShowWelcome(false)
  }

  if (session === undefined) return null

  return session ? (
    <App
      user={session.user}
      showWelcome={showWelcome}
      onDismissWelcome={dismissWelcome}
    />
  ) : (
    <SignIn />
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)