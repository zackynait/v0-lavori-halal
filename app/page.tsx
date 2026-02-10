import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Users, Briefcase, Shield, Building, Star, ArrowRight, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-emerald-100/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Building className="h-8 w-8 text-emerald-600 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Lavori Halal</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/jobs" className="text-gray-600 hover:text-emerald-600 transition-all hover:scale-105 font-medium">Annunci</Link>
              <Link href="/community" className="text-gray-600 hover:text-emerald-600 transition-all hover:scale-105 font-medium">Comunità</Link>
              <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-all hover:scale-105 font-medium">Chi Siamo</Link>
            </nav>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="hover:bg-emerald-50 hover:border-emerald-300" asChild>
                <Link href="/auth/login">Accedi</Link>
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg" asChild>
                <Link href="/auth/sign-up">Registrati</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-4 py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-teal-400/10 to-emerald-400/10 animate-pulse"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
                  <Building className="h-24 w-24 text-emerald-600" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-8 w-8 text-yellow-400 animate-bounce" />
                </div>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 text-sm font-semibold mb-6 shadow-lg">
              🌟 La Piattaforma #1 per Professionisti Musulmani
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Lavori Halal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto font-medium">
              La prima piattaforma italiana dedicata all'incontro tra professionisti e aziende 
              nel rispetto dei principi islamici.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-lg px-10 py-4 shadow-xl hover:shadow-2xl hover:scale-105">
                <Link href="/jobs">
                  <Search className="mr-3 h-6 w-6" />
                  Cerca Lavoro
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-4 border-2 hover:bg-emerald-50 hover:scale-105">
                <Link href="/community">
                  <Users className="mr-3 h-6 w-6" />
                  Comunità
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-10 py-4 border-2 hover:bg-emerald-50 hover:scale-105">
                <Link href="/jobs/new">
                  <Briefcase className="mr-3 h-6 w-6" />
                  Pubblica Offerta
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-12 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-emerald-600" />
                <span className="font-semibold">500+ Offerte</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-emerald-600" />
                <span className="font-semibold">10.000+ Professionisti</span>
              </div>
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-emerald-600" />
                <span className="font-semibold">200+ Aziende Verificate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-4 py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-emerald-100">Soddisfazione Clienti</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24h</div>
                <div className="text-emerald-100">Tempo Medio Risposta</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-emerald-100">Verificato Halal</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-emerald-100">Settori Coperti</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-20 bg-gradient-to-b from-white to-emerald-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 mb-6">✨ Vantaggi Esclusivi</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Perché scegliere <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Lavori Halal</span>?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all border-0 bg-gradient-to-br from-white to-emerald-50 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 shadow-lg">
                    <Shield className="h-10 w-10 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl">Verificato Halal</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-lg">
                    Tutte le aziende e le offerte sono verificate dalla comunità musulmana.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all border-0 bg-gradient-to-br from-white to-teal-50 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-br from-teal-100 to-emerald-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 shadow-lg">
                    <Users className="h-10 w-10 text-teal-600" />
                  </div>
                  <CardTitle className="text-2xl">Comunità Unità</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-lg">
                    Connettiti con professionisti musulmani in tutta Italia.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all border-0 bg-gradient-to-br from-white to-emerald-50 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 shadow-lg">
                    <Briefcase className="h-10 w-10 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl">Opportunità Reali</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-lg">
                    Trova lavoro che rispetta i tuoi principi religiosi.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Come funziona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-600 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Registrati</h3>
                <p className="text-gray-600">
                  Crea il tuo profilo e verifica la tua identità attraverso la comunità.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-600 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Cerca o Pubblica</h3>
                <p className="text-gray-600">
                  Esplora le offerte disponibili o pubblica la tua posizione lavorativa.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-600 text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Connettiti</h3>
                <p className="text-gray-600">
                  Interagisci direttamente con aziende e professionisti della comunità.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="px-4 py-16 bg-emerald-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ultime Opportunità
              </h2>
              <p className="text-xl text-gray-600">
                Scopri le posizioni più richieste nella nostra community
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-emerald-100 text-emerald-800">IT & Tecnologia</Badge>
                    <span className="text-sm text-gray-500">2 giorni fa</span>
                  </div>
                  <CardTitle className="text-lg">Sviluppatore Web Full Stack</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    Tech Islam Srl - Milano
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Cerchiamo sviluppatore con esperienza in React e Node.js per progetto halal...
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/jobs">
                      Scopri di più
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-emerald-100 text-emerald-800">Finanza Islamica</Badge>
                    <span className="text-sm text-gray-500">3 giorni fa</span>
                  </div>
                  <CardTitle className="text-lg">Consulente Finanziario</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    Halal Finance - Roma
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Esperto in finanza islamica per consulenza a clienti privati e aziendali...
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/jobs">
                      Scopri di più
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-emerald-100 text-emerald-800">Educazione</Badge>
                    <span className="text-sm text-gray-500">1 settimana fa</span>
                  </div>
                  <CardTitle className="text-lg">Insegnante di Arabo</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    Scuola Islamica - Torino
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Docente per corsi di lingua araba e cultura islamica per bambini...
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/jobs">
                      Scopri di più
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/jobs">
                  Vedi tutte le offerte
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dicono di noi
              </h2>
              <p className="text-xl text-gray-600">
                Storie di successo dalla nostra community
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Grazie a Lavori Halal ho trovato un lavoro che rispetta i miei valori e mi permette di praticare la mia fede senza compromessi."
                  </p>
                  <div>
                    <div className="font-semibold">Ahmed Hassan</div>
                    <div className="text-sm text-gray-500">Sviluppatore Software</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Piattaforma seria e professionale. Abbiamo assunto ottimi professionisti attraverso la community."
                  </p>
                  <div>
                    <div className="font-semibold">Fatima Al-Rashid</div>
                    <div className="text-sm text-gray-500">HR Manager</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Finalmente un luogo dove posso trovare opportunità lavorative coerenti con i miei principi."
                  </p>
                  <div>
                    <div className="font-semibold">Yusuf Karim</div>
                    <div className="text-sm text-gray-500">Consulente Finanziario</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-white/20 backdrop-blur text-white px-6 py-3 mb-8 border border-white/30">🚀 Inizia Ora</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Pronto a <span className="text-yellow-300">Iniziare</span>?
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Unisciti alla nostra community e trova opportunità lavorative che rispettano i tuoi valori.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-10 py-4 bg-white text-emerald-600 shadow-2xl hover:scale-105">
                <Link href="/auth/sign-up">
                  Registrati Ora
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-10 py-4 shadow-2xl hover:scale-105">
                <Link href="/jobs/new">
                  Pubblica Offerta
                  <Briefcase className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <Building className="h-8 w-8 text-emerald-600" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Lavori Halal</span>
              </div>
              <p className="text-gray-300 text-lg">
                La piattaforma italiana per professionisti musulmani e aziende etiche.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-emerald-400">Link Utili</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/jobs" className="hover:text-emerald-400 text-lg">Cerca Lavoro</Link></li>
                <li><Link href="/jobs/new" className="hover:text-emerald-400 text-lg">Pubblica Offerta</Link></li>
                <li><Link href="/community" className="hover:text-emerald-400 text-lg">Comunità</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-emerald-400">Account</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/auth/login" className="hover:text-emerald-400 text-lg">Accedi</Link></li>
                <li><Link href="/auth/sign-up" className="hover:text-emerald-400 text-lg">Registrati</Link></li>
                <li><Link href="/auth/forgot-password" className="hover:text-emerald-400 text-lg">Password Dimenticata</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-6 text-emerald-400">Informazioni</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/about" className="hover:text-emerald-400 text-lg">Chi Siamo</Link></li>
                <li><Link href="/privacy" className="hover:text-emerald-400 text-lg">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-emerald-400 text-lg">Termini di Servizio</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 Lavori Halal. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
