import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Users, Briefcase, Shield, Mosque, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Mosque className="h-16 w-16 text-emerald-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Lavori Halal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            La prima piattaforma italiana dedicata all'incontro tra professionisti e aziende 
            nel rispetto dei principi islamici. Trova o offri lavoro in un ambiente etico e conforme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/jobs">
                <Search className="mr-2 h-5 w-5" />
                Cerca Lavoro
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/community">
                <Users className="mr-2 h-5 w-5" />
                Comunità
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/auth/login">
                Accedi
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perché scegliere Lavori Halal?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Verificato Halal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tutte le aziende e le offerte sono verificate dalla comunità musulmana 
                  per garantire conformità con i principi islamici.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Comunità Unità</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connettiti con professionisti musulmani e aziende rispettose dei valori 
                  islamici in tutta Italia.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Opportunità Reali</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Trova lavoro o pubblica offerte in settori che rispettano i tuoi 
                  principi religiosi e culturali.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-4 py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Come funziona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Registrati</h3>
              <p className="text-gray-600">
                Crea il tuo profilo e verifica la tua identità attraverso la comunità.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cerca o Pubblica</h3>
              <p className="text-gray-600">
                Esplora le offerte disponibili o pubblica la tua posizione lavorativa.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connettiti</h3>
              <p className="text-gray-600">
                Interagisci direttamente con aziende e professionisti della comunità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-emerald-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Pronto a iniziare?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Unisciti alla nostra comunità e trova opportunità lavorative che rispettano i tuoi valori.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/auth/sign-up">
                Registrati Ora
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <Link href="/jobs/new">
                Pubblica Offerta
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
