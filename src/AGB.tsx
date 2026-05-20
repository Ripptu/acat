import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function AGB() {
  return (
    <div className="min-h-screen bg-brand-bg pt-24 pb-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-dark mb-8 hover:opacity-70 transition-opacity font-medium">
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 md:p-14 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-brand-dark mb-10">Allgemeine Geschäfts&shy;bedingungen (AGB)</h1>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold font-outfit text-brand-dark mb-4">§ 1 Geltungsbereich</h2>
              <p>
                Für alle Verträge zwischen der ACAT Gebäudereinigung GmbH (im Folgenden "Auftragnehmer") und ihren Kunden (im Folgenden "Auftraggeber") gelten ausschließlich diese Allgemeinen Geschäftsbedingungen. Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-outfit text-brand-dark mb-4">§ 2 Leistungsumfang</h2>
              <p className="mb-4">
                1. Der Auftragnehmer erbringt Leistungen in der Gebäudereinigung. Der genaue Leistungsumfang wird im jeweiligen Einzelvertrag oder Angebot detailliert beschrieben.
              </p>
              <p>
                2. Soweit nicht anders vereinbart, stellt der Auftragnehmer die erforderlichen Reinigungsmittel und -geräte zur Verfügung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-outfit text-brand-dark mb-4">§ 3 Mitwirkungspflichten des Auftraggebers</h2>
              <p className="mb-4">
                1. Der Auftraggeber stellt sicher, dass der Auftragnehmer freien Zugang zu den zu reinigenden Flächen erhält.
              </p>
              <p>
                2. Der Auftraggeber stellt kostenfrei unentgeltlich Wasser und Strom für die Reinigungsarbeiten zur Verfügung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-outfit text-brand-dark mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
              <p className="mb-4">
                1. Es gelten die im Vertrag vereinbarten Preise. Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
              </p>
              <p>
                2. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar, sofern nicht anders vereinbart.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-outfit text-brand-dark mb-4">§ 5 Haftung</h2>
              <p>
                Der Auftragnehmer haftet für Schäden, die nachweislich durch ihn oder seine Mitarbeiter bei der Ausführung der Reinigungsarbeiten entstehen, im Rahmen der bestehenden Betriebshaftpflichtversicherung. Für einfache Fahrlässigkeit wird nur bei Verletzung wesentlicher Vertragspflichten gehaftet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-outfit text-brand-dark mb-4">§ 6 Gerichtsstand</h2>
              <p>
                Ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Karlsruhe, sofern der Auftraggeber Kaufmann, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen ist.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
