"use client"

import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, Building2, Briefcase, Euro, Search, Filter, Users, Building } from "lucide-react"

// Dati di esempio per lavori halal
const sampleJobs = [
  {
    id: 1,
    title: "Sviluppatore Web Full Stack",
    sector: "IT/Software",
    source: "Tech Islam Srl",
    contract_type: "dipendente",
    work_mode: "Ibrido",
    availability_period: "Immediato",
    description: "Cerchiamo sviluppatore Muslim-friendly per azienda tech che rispetta i principi islamici. Orari flessibili per preghiere, ambiente halal.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    ral_min: 35000,
    ral_max: 45000,
    created_at: "2024-01-15",
    verified_halal: true,
    muslim_friendly: true
  },
  {
    id: 2,
    title: "Contabile Certificato",
    sector: "Finanza",
    source: "Islamic Finance Italia",
    contract_type: "dipendente",
    work_mode: "Remoto",
    availability_period: "1 mese",
    description: "Studio di consulenza finanziaria islamica cerca contabile con conoscenza principi finanza islamica. Ambiente 100% halal.",
    technologies: ["Excel", "SAP", "Contabilità Islamica"],
    ral_min: 30000,
    ral_max: 38000,
    created_at: "2024-01-14",
    verified_halal: true,
    muslim_friendly: true
  },
  {
    id: 3,
    title: "Chef Cucina Halal",
    sector: "Ristorazione",
    source: "Ristorante Al-Madinah",
    contract_type: "dipendente",
    work_mode: "Presenziale",
    availability_period: "Immediato",
    description: "Ristorante halal certificato cerca chef con esperienza in cucina islamica. Orari compatibili con preghiere.",
    technologies: ["Cucina Italiana", "Cucina Araba", "HACCP"],
    ral_min: 25000,
    ral_max: 32000,
    created_at: "2024-01-13",
    verified_halal: true,
    muslim_friendly: true
  },
  {
    id: 4,
    title: "Insegnante Arabo",
    sector: "Educazione",
    source: "Scuola Coranica Milano",
    contract_type: "piva",
    work_mode: "Presenziale",
    availability_period: "Immediato",
    description: "Scuola islamica cerca insegnante di arabo e studi islamici. Ambiente educativo halal.",
    technologies: ["Lingua Araba", "Studi Islamici", "Pedagogia"],
    daily_rate_min: 150,
    daily_rate_max: 200,
    created_at: "2024-01-12",
    verified_halal: true,
    muslim_friendly: true
  },
  {
    id: 5,
    title: "Marketing Manager",
    sector: "Marketing",
    source: "Halal Products Italia",
    contract_type: "dipendente",
    work_mode: "Ibrido",
    availability_period: "2 settimane",
    description: "Azienda di prodotti halal cerca marketing manager per promozione prodotti certificati. Ambiente rispettoso valori islamici.",
    technologies: ["Digital Marketing", "Social Media", "Content Strategy"],
    ral_min: 40000,
    ral_max: 55000,
    created_at: "2024-01-11",
    verified_halal: true,
    muslim_friendly: true
  }
]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSector, setSelectedSector] = useState("")
  const [selectedContract, setSelectedContract] = useState("")
  const [selectedMode, setSelectedMode] = useState("")

  const filteredJobs = sampleJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.source.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSector = !selectedSector || job.sector === selectedSector
    const matchesContract = !selectedContract || job.contract_type === selectedContract
    const matchesMode = !selectedMode || job.work_mode === selectedMode

    return matchesSearch && matchesSector && matchesContract && matchesMode
  })

  const sectors = [...new Set(sampleJobs.map(job => job.sector))]
  const contracts = [...new Set(sampleJobs.map(job => job.contract_type))]
  const modes = [...new Set(sampleJobs.map(job => job.work_mode))]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Building className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">Lavori Halal</span>
            </Link>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <Link href="/community">Comunità</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/auth/login">Accedi</Link>
              </Button>
              <Button asChild>
                <Link href="/jobs/new">Pubblica Offerta</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Opportunità Lavorative Halal
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Trova lavoro in aziende che rispettano i tuoi principi islamici
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Cerca per posizione, azienda o competenze..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Settore" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tutti i settori</SelectItem>
                {sectors.map(sector => (
                  <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedContract} onValueChange={setSelectedContract}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Tipo Contratto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tutti i contratti</SelectItem>
                {contracts.map(contract => (
                  <SelectItem key={contract} value={contract}>
                    {contract === "dipendente" ? "Dipendente" : contract === "piva" ? "P.IVA" : contract}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedMode} onValueChange={setSelectedMode}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Modalità" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tutte le modalità</SelectItem>
                {modes.map(mode => (
                  <SelectItem key={mode} value={mode}>{mode}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {(selectedSector || selectedContract || selectedMode || searchTerm) && (
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("")
                  setSelectedSector("")
                  setSelectedContract("")
                  setSelectedMode("")
                }}
              >
                Pulisci filtri
              </Button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredJobs.length} opportunità trovate
            {filteredJobs.length < sampleJobs.length && ` su ${sampleJobs.length} totali`}
          </p>
        </div>

        {/* Jobs List */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-200 cursor-pointer border-emerald-100">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                        {job.verified_halal && (
                          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                            <Building className="w-3 h-3 mr-1" />
                            Verificato Halal
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="flex items-center gap-2 text-gray-600">
                        <Building2 className="w-4 h-4" />
                        {job.source}
                        <span className="text-gray-400">|</span>
                        {job.sector}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant={job.contract_type === "piva" ? "outline" : "secondary"}>
                        {job.contract_type === "piva" ? "P.IVA" : job.contract_type === "dipendente" ? "Dipendente" : "Altro"}
                      </Badge>
                      <Badge variant="secondary">{job.work_mode}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.technologies?.slice(0, 5).map((tech: string) => (
                      <Badge key={tech} variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                        {tech}
                      </Badge>
                    ))}
                    {job.technologies?.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{job.technologies.length - 5}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.work_mode}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.availability_period}
                    </span>
                    {job.contract_type === "piva" && job.daily_rate_min && (
                      <span className="flex items-center gap-1">
                        <Euro className="w-4 h-4" />
                        {job.daily_rate_min}-{job.daily_rate_max}/giorno
                      </span>
                    )}
                    {job.contract_type === "dipendente" && job.ral_min && (
                      <span className="flex items-center gap-1">
                        <Euro className="w-4 h-4" />
                        {(job.ral_min / 1000).toFixed(0)}k-{(job.ral_max / 1000).toFixed(0)}k RAL
                      </span>
                    )}
                    <span className="ml-auto text-xs text-gray-400">
                      {new Date(job.created_at).toLocaleDateString("it-IT")}
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Button className="w-full sm:w-auto">
                      Candidati Ora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-16">
            <CardContent>
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Nessuna opportunità trovata</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || selectedSector || selectedContract || selectedMode 
                  ? "Prova a modificare i filtri di ricerca" 
                  : "Sii il primo a pubblicare un'opportunità!"}
              </p>
              <div className="flex gap-4 justify-center">
                {(searchTerm || selectedSector || selectedContract || selectedMode) && (
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedSector("")
                      setSelectedContract("")
                      setSelectedMode("")
                    }}
                  >
                    Pulisci filtri
                  </Button>
                )}
                <Button asChild>
                  <Link href="/jobs/new">Pubblica Offerta</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
