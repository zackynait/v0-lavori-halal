"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Loader2, Building, CheckCircle } from "lucide-react"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [registered, setRegistered] = useState(false)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError("Le password non coincidono")
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError("La password deve essere di almeno 6 caratteri")
      setLoading(false)
      return
    }

    // Simulate registration (in a real app, this would register with a backend)
    setTimeout(() => {
      setLoading(false)
      setRegistered(true)
      
      // Store registration state in localStorage for demo purposes
      localStorage.setItem('isRegistered', 'true')
      localStorage.setItem('userEmail', email)
      localStorage.setItem('userName', fullName)
    }, 2000)
  }

  if (registered) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900">Registrazione Completata!</CardTitle>
            <CardDescription>
              Benvenuto nella comunità Lavori Halal, {fullName}!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-sm text-emerald-800">
                <strong>Cosa succede ora:</strong><br />
                • Il tuo account è stato creato con successo<br />
                • Puoi accedere subito con le tue credenziali<br />
                • Inizia a esplorare le opportunità lavorative
              </p>
            </div>
            <div className="flex gap-3">
              <Button onClick={() => router.push("/auth/login")} className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                Accedi Ora
              </Button>
              <Button variant="outline" onClick={() => router.push("/")} className="flex-1">
                Home Page
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <Building className="h-10 w-10 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">Lavori Halal</span>
          </Link>
          <p className="text-gray-600">Unisciti alla community di professionisti musulmani</p>
        </div>

        <Card className="border-emerald-100 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-gray-900">Crea Account</CardTitle>
            <CardDescription className="text-center">
              Inserisci i tuoi dati per registrarti alla piattaforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 rounded-lg">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-700">Nome Completo</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Mario Rossi"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="border-emerald-200 focus:border-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nome@esempio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-emerald-200 focus:border-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-emerald-200 focus:border-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700">Conferma Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="border-emerald-200 focus:border-emerald-500"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Registrazione in corso...
                  </>
                ) : (
                  "Registrati"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">Hai già un account? </span>
              <Link href="/auth/login" className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium">
                Accedi
              </Link>
            </div>

            <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
              <p className="text-xs text-emerald-800 text-center">
                <strong>Nota:</strong> Registrandoti, accetti di far parte della comunità di professionisti che rispettano i principi islamici.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
