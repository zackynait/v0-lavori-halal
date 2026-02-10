 
 "use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Building, 
  Users, 
  Calendar, 
  MapPin, 
  Star, 
  Heart, 
  MessageCircle,
  Search,
  Filter,
  Clock,
  Award,
  Globe
} from "lucide-react"

// Dati di esempio per la comunità
const mosques = [
  {
    id: 1,
    name: "Moschea Centrale di Milano",
    address: "Via Edgardo Ferraris, 34, Milano",
    city: "Milano",
    region: "Lombardia",
    verified: true,
    community_size: "5000+ membri",
    services: ["Preghiere quotidiane", "Corano per bambini", "Consulenza matrimoniale", "Supporto lavorativo"],
    contact: "info@moscheamilano.it"
  },
  {
    id: 2,
    name: "Centro Islamico di Roma",
    address: "Viale della Primavera, 123, Roma",
    city: "Roma",
    region: "Lazio",
    verified: true,
    community_size: "3000+ membri",
    services: ["Scuola islamica", "Corsi di arabo", "Attività giovanili", "Sport comunitario"],
    contact: "centroislamico.roma@gmail.com"
  },
  {
    id: 3,
    name: "Associazione Musulmana Torino",
    address: "Corso Regina Margherita, 89, Torino",
    city: "Torino",
    region: "Piemonte",
    verified: false,
    community_size: "1500+ membri",
    services: ["Preghiere", "Corsi religiosi", "Eventi culturali"],
    contact: "associazione.torino@islam.it"
  }
]

const communityEvents = [
  {
    id: 1,
    title: "Career Day Halal 2024",
    date: "2024-02-15",
    time: "09:00 - 18:00",
    location: "Moschea Centrale di Milano",
    type: "Lavoro",
    description: "Evento di recruiting con aziende halal e workshop su come trovare lavoro rispettando i principi islamici.",
    attendees: 150,
    max_attendees: 200
  },
  {
    id: 2,
    title: "Workshop: Finanza Islamica",
    date: "2024-02-20",
    time: "15:00 - 17:00",
    location: "Online",
    type: "Educazione",
    description: "Introduzione ai principi della finanza islamica e opportunità di carriera nel settore.",
    attendees: 75,
    max_attendees: 100
  },
  {
    id: 3,
    title: "Networking Professionale Musulmano",
    date: "2024-02-25",
    time: "18:30 - 21:00",
    location: "Centro Islamico di Roma",
    type: "Networking",
    description: "Serata di incontro tra professionisti musulmani per condividere esperienze e opportunità.",
    attendees: 45,
    max_attendees: 60
  }
]

const communityServices = [
  {
    id: 1,
    title: "Consulenza Lavorativa",
    description: "Supporto gratuito nella ricerca di lavoro compatibile con principi islamici",
    icon: Heart,
    provider: "Comunità Musulmana Italiana",
    contact: "lavoro@comunitamuslimmana.it"
  },
  {
    id: 2,
    title: "Verifica Aziende Halal",
    description: "Servizio di certificazione e verifica delle aziende che rispettano i principi islamici",
    icon: Award,
    provider: "Halal Certification Italy",
    contact: "certificazione@halalitaly.it"
  },
  {
    id: 3,
    title: "Formazione Professionale",
    description: "Corsi di formazione specifici per professionisti musulmani",
    icon: Users,
    provider: "Islamic Education Center",
    contact: "formazione@islamic-edu.it"
  }
]

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")
  const [activeTab, setActiveTab] = useState("mosques")

  const filteredMosques = mosques.filter(mosque => {
    const matchesSearch = mosque.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mosque.city.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = !selectedRegion || mosque.region === selectedRegion
    return matchesSearch && matchesRegion
  })

  const regions = [...new Set(mosques.map(mosque => mosque.region))]

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
                <Link href="/jobs">Annunci</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/login">Accedi</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comunità Musulmana Italiana
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connettiti con moschee, eventi e servizi della comunità musulmana in tutta Italia
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button
            variant={activeTab === "mosques" ? "default" : "outline"}
            onClick={() => setActiveTab("mosques")}
            className="mb-2"
          >
            <Building className="w-4 h-4 mr-2" />
            Moschee
          </Button>
          <Button
            variant={activeTab === "events" ? "default" : "outline"}
            onClick={() => setActiveTab("events")}
            className="mb-2"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Eventi
          </Button>
          <Button
            variant={activeTab === "services" ? "default" : "outline"}
            onClick={() => setActiveTab("services")}
            className="mb-2"
          >
            <Heart className="w-4 h-4 mr-2" />
            Servizi
          </Button>
        </div>

        {/* Mosques Tab */}
        {activeTab === "mosques" && (
          <div>
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Cerca moschee per nome o città..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Regione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tutte le regioni</SelectItem>
                  {regions.map(region => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Mosques Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMosques.map((mosque) => (
                <Card key={mosque.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-gray-900">{mosque.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          {mosque.city}, {mosque.region}
                        </CardDescription>
                      </div>
                      {mosque.verified && (
                        <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                          <Star className="w-3 h-3 mr-1" />
                          Verificata
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">
                      <strong>Indirizzo:</strong> {mosque.address}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Comunità:</strong> {mosque.community_size}
                    </p>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Servizi:</p>
                      <div className="flex flex-wrap gap-1">
                        {mosque.services.slice(0, 3).map((service, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {mosque.services.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{mosque.services.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4 border-t">
                      <Button size="sm" className="flex-1">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contatta
                      </Button>
                      <Button size="sm" variant="outline">
                        <MapPin className="w-4 h-4 mr-2" />
                        Mappa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="space-y-6">
            {communityEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{event.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(event.date).toLocaleDateString('it-IT')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge variant={event.type === "Lavoro" ? "default" : "secondary"}>
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {event.attendees}/{event.max_attendees} partecipanti
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        Iscriviti
                      </Button>
                      <Button size="sm" variant="outline">
                        Dettagli
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityServices.map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                        <CardDescription>{service.provider}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{service.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contatta
                      </Button>
                      <Button size="sm" variant="outline">
                        <Globe className="w-4 h-4 mr-2" />
                        Sito Web
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-emerald-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Partecipa alla Nostra Comunità
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Unisciti a migliaia di professionisti musulmani in Italia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth/sign-up">Registrati</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600" asChild>
              <Link href="/jobs/new">Pubblica Annuncio</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
