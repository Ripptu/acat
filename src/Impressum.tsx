import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-brand-bg pt-24 pb-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-dark mb-8 hover:opacity-70 transition-opacity font-medium">
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 md:p-14 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-brand-dark mb-10">Impressum</h1>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold font-outfit text-brand-dark mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                ACAT Gebäudereinigung GmbH<br />
                Musterstraße 123<br />
                76133 Karlsruhe
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-outfit text-brand-dark mb-3">Vertreten durch</h2>
              <p>Max Mustermann (Geschäftsführer)</p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-outfit text-brand-dark mb-3">Kontakt</h2>
              <p>
                Telefon: +49 721 1234567<br />
                E-Mail: info@acatgebaeudereinigung.de<br />
                Website: www.acatgebaeudereinigung.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-outfit text-brand-dark mb-3">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Mannheim<br />
                Registernummer: HRB 123456
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-outfit text-brand-dark mb-3">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE 123 456 789
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-outfit text-brand-dark mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                Max Mustermann<br />
                Musterstraße 123<br />
                76133 Karlsruhe
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
