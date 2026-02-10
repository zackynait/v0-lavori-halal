"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Loader2, Building, CheckCircle } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Simulate login (in a real app, this would authenticate with a backend)
    setTimeout(() => {
      setLoading(false)
      
      // Simple validation for demo
      if (email && password.length >= 6) {
        setLoggedIn(true)
        // Store login state in localStorage for demo purposes
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userEmail', email)
        
        // Redirect to jobs page after successful login
        setTimeout(() => {
          router.push("/jobs")
        }, 2000)
      } else {
        setError("Email o password non validi. Per demo, usa qualsiasi email e password di almeno 6 caratteri.")
      }
    }, 1500)
  }

  if (loggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-teal-400/10 to-emerald-400/10 animate-pulse"></div>
        <div className="relative z-10 max-w-md w-full mx-4">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-lg">
            <CardHeader className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Login Success!</CardTitle>
              <CardDescription className="text-gray-600">
                Bentornato su Lavori Halal
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                  <Building className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-800">Accesso verificato</span>
                </div>
                <p className="text-gray-600">Stai per essere reindirizzato...</p>
                <div className="flex justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-teal-400/10 to-emerald-400/10 animate-pulse"></div>
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <Building className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Lavori Halal</span>
          </Link>
          <p className="text-gray-600 text-lg">Accedi per trovare opportunità lavorative halal</p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-lg hover:shadow-3xl transition-all">
          <CardHeader className="space-y-4 pb-6">
            <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Accedi</CardTitle>
            <CardDescription className="text-center text-gray-600 text-lg">
              Inserisci le tue credenziali per accedere alla piattaforma
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="flex items-center gap-3 p-4 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  {error}
                </div>
              )}

              <div className="space-y-3">
                <Label htmlFor="email" className="text-gray-700 font-medium text-base">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nome@esempio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-12 text-base"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-700 font-medium text-base">Password</Label>
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline font-medium"
                  >
                    Password dimenticata?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="•••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-12 text-base"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg font-semibold h-14 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                    Accesso in corso...
                  </>
                ) : (
                  "Accedi"
                )}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <span className="text-gray-600">Non hai un account? </span>
              <Link href="/auth/sign-up" className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium">
                Registrati
              </Link>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
              <p className="text-sm text-emerald-800 text-center">
                <strong className="text-emerald-900">Accesso Demo:</strong> Inserisci qualsiasi email e una password di almeno 6 caratteri per accedere.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
