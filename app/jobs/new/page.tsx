"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Loader2, Briefcase, ArrowLeft, Plus, X, Building, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const SECTORS = [
  "IT & Tecnologia",
  "Finanza Islamica",
  "Marketing & Comunicazione",
  "Ristorazione Halal",
  "Educazione Islamica",
  "Vendite & Commerciale",
  "Design & Creatività",
  "Ingegneria",
  "Sanità & Healthcare",
  "Consulenza Halal",
  "Operations & Logistica",
  "Altro"
]

const SOURCES = [
  "Comunità Musulmana",
  "Moschea Locale",
  "Azienda Certificata Halal",
  "Referral",
  "Sito Aziendale",
  "Social Media",
  "Altro"
]

const WORK_MODES = [
  "Remoto",
  "Ibrido",
  "In sede",
  "Presenziale"
]

export default function NewJobPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [halalReason, setHalalReason] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [contractType, setContractType] = useState("")
  const [sector, setSector] = useState("")
  const [source, setSource] = useState("")
  const [technologies, setTechnologies] = useState<string[]>([])
  const [techInput, setTechInput] = useState("")
  const [availability, setAvailability] = useState("")
  const [workMode, setWorkMode] = useState("")
  const [salaryMin, setSalaryMin] = useState("")
  const [salaryMax, setSalaryMax] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [notes, setNotes] = useState("")

  const addTechnology = () => {
    if (techInput.trim() && !technologies.includes(techInput.trim())) {
      setTechnologies([...technologies, techInput.trim()])
      setTechInput("")
    }
  }

  const removeTechnology = (tech: string) => {
    setTechnologies(technologies.filter(t => t !== tech))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Simulate submission (in a real app, this would save to database)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      
      // In a real app, you would save the job data here
      console.log("Job submitted:", {
        title,
        description,
        halalReason,
        companyName,
        contractType,
        sector,
        source,
        technologies,
        availability,
        workMode,
        salaryMin,
        salaryMax,
        contactEmail,
        notes
      })
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900">Annuncio Pubblicato!</CardTitle>
            <CardDescription>
              La tua opportunità lavorativa è stata inviata alla comunità e verrà revisionata.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-sm text-emerald-800">
                <strong>Cosa succede ora:</strong><br />
                • La tua offerta verrà verificata dalla comunità<br />
                • Riceverai una conferma via email<br />
                • L'annuncio sarà visibile nella piattaforma
              </p>
            </div>
            <div className="flex gap-3">
              <Button onClick={() => router.push("/jobs")} className="flex-1">
                Vedi Annunci
              </Button>
              <Button variant="outline" onClick={() => {
                setSubmitted(false)
                setTitle("")
                setDescription("")
                setHalalReason("")
                setCompanyName("")
                setContractType("")
                setSector("")
                setSource("")
                setTechnologies([])
                setAvailability("")
                setWorkMode("")
                setSalaryMin("")
                setSalaryMax("")
                setContactEmail("")
                setNotes("")
              }} className="flex-1">
                Nuovo Annuncio
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">Lavori Halal</span>
          </Link>
          <Button variant="outline" asChild>
            <Link href="/jobs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna agli Annunci
            </Link>
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pubblica Opportunità Lavorativa
          </h1>
          <p className="text-xl text-gray-600">
            Condividi un'opportunità che rispetta i principi islamici con la nostra comunità
          </p>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-4 text-sm text-red-600 bg-red-50 rounded-lg mb-6">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Informazioni Principali</CardTitle>
              <CardDescription>
                Dettagli fondamentali dell'opportunità lavorativa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titolo Posizione *</Label>
                <Input
                  id="title"
                  placeholder="es. Sviluppatore Web Full Stack"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Nome Azienda *</Label>
                <Input
                  id="companyName"
                  placeholder="es. Tech Islam Srl"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrizione *</Label>
                <Textarea
                  id="description"
                  placeholder="Descrivi la posizione, responsabilità, requisiti e perché è un'opportunità halal..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="halalReason">Perché è Halal? *</Label>
                <Textarea
                  id="halalReason"
                  placeholder="Spiega perché questa opportunità rispetta i principi islamici (orari flessibili per preghiere, ambiente halal, prodotti certificati, etc.)..."
                  value={halalReason}
                  onChange={(e) => setHalalReason(e.target.value)}
                  required
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tipo Contratto *</Label>
                  <Select value={contractType} onValueChange={setContractType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dipendente">Dipendente</SelectItem>
                      <SelectItem value="piva">Partita IVA</SelectItem>
                      <SelectItem value="stage">Stage/Tirocinio</SelectItem>
                      <SelectItem value="altro">Altro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Settore *</Label>
                  <Select value={sector} onValueChange={setSector} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona..." />
                    </SelectTrigger>
                    <SelectContent>
                      {SECTORS.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Dettagli Lavorativi</CardTitle>
              <CardDescription>
                Informazioni su modalità, disponibilità e retribuzione
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Modalità Lavoro *</Label>
                  <Select value={workMode} onValueChange={setWorkMode} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona..." />
                    </SelectTrigger>
                    <SelectContent>
                      {WORK_MODES.map((w) => (
                        <SelectItem key={w} value={w}>{w}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Disponibilità *</Label>
                  <Input
                    id="availability"
                    placeholder="es. Immediato, Febbraio 2026..."
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="salaryMin">Retribuzione Minima (EUR)</Label>
                  <Input
                    id="salaryMin"
                    type="number"
                    placeholder="es. 25000"
                    value={salaryMin}
                    onChange={(e) => setSalaryMin(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salaryMax">Retribuzione Massima (EUR)</Label>
                  <Input
                    id="salaryMax"
                    type="number"
                    placeholder="es. 35000"
                    value={salaryMax}
                    onChange={(e) => setSalaryMax(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Competenze Richieste</CardTitle>
              <CardDescription>
                Tecnologie, lingue o competenze specifiche necessarie
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Aggiungi competenza o tecnologia..."
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTechnology())}
                />
                <Button type="button" onClick={addTechnology} variant="outline">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                      {tech}
                      <button type="button" onClick={() => removeTechnology(tech)}>
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact & Source */}
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Contatto e Fonte</CardTitle>
              <CardDescription>
                Come i candidati possono contattare e da dove viene questa opportunità
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Email Contatto *</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="email@azienda.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Fonte dell'Opportunità *</Label>
                <Select value={source} onValueChange={setSource} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleziona..." />
                  </SelectTrigger>
                  <SelectContent>
                    {SOURCES.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Note Aggiuntive</Label>
                <Textarea
                  id="notes"
                  placeholder="Altre informazioni utili (benefits, orari speciali, etc.)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex gap-4 justify-center">
            <Button type="submit" size="lg" disabled={loading} className="bg-emerald-600 hover:bg-emerald-700">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Pubblicazione in corso...
                </>
              ) : (
                "Pubblica Annuncio"
              )}
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={() => router.back()}>
              Annulla
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
