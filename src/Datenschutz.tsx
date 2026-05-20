import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-brand-bg pt-24 pb-20 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-dark mb-8 hover:opacity-70 transition-opacity font-medium">
          <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 md:p-14 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-brand-dark mb-10">Datenschutz&shy;erklärung</h1>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold font-outfit text-brand-dark mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">Datenerfassung auf dieser Website</h3>
              <p className="font-semibold mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
              <p className="mb-4">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
              
              <p className="font-semibold mb-1">Wie erfassen wir Ihre Daten?</p>
              <p className="mb-4">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
              <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-outfit text-brand-dark mb-4">2. Hosting</h2>
              <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Cloud Run (Google Cloud).</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-outfit text-brand-dark mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
