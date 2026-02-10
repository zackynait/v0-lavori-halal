import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Users, Briefcase, Shield, Clock, Building, Star, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header Navigation */}
      <header className="bg-white border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Building className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">Lavori Halal</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/jobs" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Annunci
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Comunità
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Chi Siamo
              </Link>
            </nav>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <Link href="/auth/login">Accedi</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/sign-up">Registrati</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-emerald-100 p-6 rounded-full">
                <Building className="h-20 w-20 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Lavori Halal
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              La prima piattaforma italiana dedicata all'incontro tra professionisti e aziende 
              nel rispetto dei principi islamici. Trova o offri lavoro in un ambiente etico e conforme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                <Link href="/jobs">
                  <Search className="mr-2 h-5 w-5" />
                  Cerca Lavoro
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3">
                <Link href="/community">
                  <Users className="mr-2 h-5 w-5" />
                  Comunità
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3">
                <Link href="/jobs/new">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Pubblica Offerta
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-emerald-600" />
                <span>500+ Offerte</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-emerald-600" />
                <span>10.000+ Professionisti</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-emerald-600" />
                <span>200+ Aziende Verificate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                <div className="text-gray-600">Soddisfazione Clienti</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">24h</div>
                <div className="text-gray-600">Tempo Medio Risposta</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="text-gray-600">Verificato Halal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                <div className="text-gray-600">Settori Coperti</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-16 bg-emerald-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Perché scegliere Lavori Halal?
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              La nostra piattaforma è progettata per garantirti un'esperienza lavorativa rispettosa dei tuoi valori
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow border-emerald-100">
                <CardHeader>
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Verificato Halal</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Tutte le aziende e le offerte sono verificate dalla comunità musulmana 
                    per garantire conformità con i principi islamici.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-emerald-100">
                <CardHeader>
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Comunità Unità</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Connettiti con professionisti musulmani e aziende rispettose dei valori 
                    islamici in tutta Italia.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-emerald-100">
                <CardHeader>
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Opportunità Reali</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Trova lavoro o pubblica offerte in settori che rispettano i tuoi 
                    principi religiosi e culturali.
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

        {/* CTA Section */}
        <section className="px-4 py-20 bg-emerald-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto a iniziare?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Unisciti alla nostra community e trova opportunità lavorative che rispettano i tuoi valori.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Link href="/auth/sign-up">
                  Registrati Ora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3">
                <Link href="/jobs/new">
                  Pubblica Offerta
                  <Briefcase className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building className="h-8 w-8 text-emerald-400" />
                <span className="text-xl font-bold">Lavori Halal</span>
              </div>
              <p className="text-gray-400">
                La piattaforma italiana per professionisti musulmani e aziende etiche.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Link Utili</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/jobs" className="hover:text-emerald-400">Cerca Lavoro</Link></li>
                <li><Link href="/jobs/new" className="hover:text-emerald-400">Pubblica Offerta</Link></li>
                <li><Link href="/community" className="hover:text-emerald-400">Comunità</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/auth/login" className="hover:text-emerald-400">Accedi</Link></li>
                <li><Link href="/auth/sign-up" className="hover:text-emerald-400">Registrati</Link></li>
                <li><Link href="/auth/forgot-password" className="hover:text-emerald-400">Password Dimenticata</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Informazioni</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-emerald-400">Chi Siamo</Link></li>
                <li><Link href="/privacy" className="hover:text-emerald-400">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-emerald-400">Termini di Servizio</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lavori Halal. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
