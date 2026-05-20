import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Droplets, Grid, Plus, Instagram, Star, Check, X, Shield, Mail, Menu } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Impressum from './Impressum';
import Datenschutz from './Datenschutz';
import AGB from './AGB';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Specific category images for services
const IMG_BUE = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop";
const IMG_GLAS = "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=600&auto=format&fit=crop";
const IMG_BAU = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop";
const IMG_TREPPEN = "https://image.bz-berlin.de/data/uploads/2016/05/67035106_1463919147.jpg";
const IMG_FITNESS = "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=600&auto=format&fit=crop";
const IMG_KITA = "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=600&auto=format&fit=crop";
const IMG_ARZT = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop";
const IMG_KIRCHE = "https://pfarre-leogang.at/wp-content/uploads/2026/04/kirchenputz_9-768x1024.jpg";
const FOOTER_IMG = "https://impro.usercontent.one/appid/oneComWsb/domain/mr-meisterbetrieb.de/media/mr-meisterbetrieb.de/onewebmedia/M&R%20Meisterbetrieb%20Malerwerkstatt%20b%C3%BCro1.jpg?etag=%224ebd7-69a69f24%22&sourceContentType=image%2Fjpeg&quality=85";

const TELEPHONE = "+49 721 1234567";
const TELEPHONE_HREF = "tel:+497211234567";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5z" />
  </svg>
);

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 w-full transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-xl shadow-lg py-3' : ''}`}
      >
      <div className="flex items-center">
        <img src="https://s1.directupload.eu/images/260520/uqx4boxv.webp" alt="ACAT Logo" className="h-10 md:h-12 w-auto" />
      </div>

      <div className="hidden md:flex items-center bg-white/10 backdrop-blur-md rounded-full px-8 py-3 text-white text-sm font-medium gap-8 border border-white/20 shadow-sm">
        <a href="/#leistungen" className="hover:text-white/70 transition-colors">Leistungen</a>
        <a href="/#bewertungen" className="hover:text-white/70 transition-colors">Bewertungen</a>
        <a href="/#faq" className="hover:text-white/70 transition-colors">FAQ</a>
        <a href="/#kontakt" className="hover:text-white/70 transition-colors">Kontakt</a>
      </div>

      <div className="flex items-center gap-4">
        <a href={TELEPHONE_HREF} className="hidden lg:flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-3 rounded-full font-medium text-sm transition-colors border border-white/20">
          <Phone className="w-4 h-4" />
          {TELEPHONE}
        </a>
        <button className="md:hidden text-white p-2 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dark pt-24 px-6 pb-6 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold font-outfit text-white">
              <a href="/#leistungen" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-light transition-colors">Leistungen</a>
              <a href="/#bewertungen" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-light transition-colors">Bewertungen</a>
              <a href="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-light transition-colors">FAQ</a>
              <a href="/#kontakt" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-light transition-colors">Kontakt</a>
            </div>
            
            <div className="mt-8">
              <a href={TELEPHONE_HREF} className="flex items-center gap-3 text-white text-xl font-bold mb-6 font-outfit">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                {TELEPHONE}
              </a>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full bg-white/10 text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-white/10 text-white">
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] bg-brand-dark overflow-hidden lg:rounded-b-[2rem]">
      {/* Video Background with fallback */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-100"
        >
          {/* Abstract clean video placeholder */}
          <source src="https://res.cloudinary.com/dvwijhs3c/video/upload/q_auto/f_auto/v1779206015/8440520-hd_2048_1080_25fps_vzabxd.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Gradients to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      <Navbar />

      {/* Floating Action Button for Mobile & Desktop Contacts */}
      <div className="absolute right-6 bottom-8 md:right-8 lg:bottom-12 z-40 hidden md:block">
        <a href={TELEPHONE_HREF} className="bg-white hover:bg-gray-100 text-brand-dark p-4 md:p-5 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 flex items-center justify-center animate-pulse">
          <Phone className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-center lg:justify-end pb-32 pt-24 px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-white"
        >
          <div className="hidden sm:inline-block px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md bg-white/10 mb-6 text-sm font-medium tracking-wide uppercase text-white/90">
            Reinigungsfirma in Karlsruhe & Region
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6 font-outfit flex flex-col gap-2">
            <span><span className="font-serif font-normal italic text-white">ACAT</span> <span className="text-gray-300">Gebäudereinigung</span></span>
            <span className="font-normal opacity-90 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-brand-light">makellos, lokal, zuverlässig.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-sans">
            Mit modernen Methoden und langjähriger Expertise sorgen wir für kompromisslose Sauberkeit. 
            Maßgeschneiderte Reinigung für Bürogebäude, Praxen und öffentliche Einrichtungen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#kontakt" className="w-full sm:w-auto justify-center bg-white text-brand-dark font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
              Angebot anfordern <Check className="w-5 h-5 text-brand-light"/>
            </a>
            <a href="/#leistungen" className="w-full sm:w-auto text-center bg-white/10 backdrop-blur-md text-white font-medium px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-colors border border-white/20">
              Kategorien entdecken
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const servicesList = [
    { title: "Büroreinigung", desc: "Produktive, hygienische Arbeitsplätze für Ihr Team und einen professionellen Eindruck.", img: IMG_BUE },
    { title: "Glasreinigung", desc: "Streifenfreier Glanz für Fenster, Fassaden und Schaufenster.", img: IMG_GLAS },
    { title: "Baureinigung", desc: "Bauendreinigung und Grobreinigung nach der Fertigstellung.", img: IMG_BAU },
    { title: "Treppenhausreinigung", desc: "Der erste Eindruck zählt – saubere Aufgänge für Ihre Mieter.", img: IMG_TREPPEN },
    { title: "Fitnessstudios", desc: "Höchste Hygiene für Trainingsgeräte, Dusch- & Sanitärbereiche.", img: IMG_FITNESS },
    { title: "Kitas & Schulen", desc: "Sichere Wohlfühlumgebung und Desinfektion für Einrichtungen.", img: IMG_KITA },
    { title: "Arztpraxen", desc: "Strenge Einhaltung aller Hygiene- und Infektionsschutzstandards.", img: IMG_ARZT },
    { title: "Kirchengemeinden", desc: "Respektvolle und schonende Reinigung sakraler Räumlichkeiten.", img: IMG_KIRCHE },
];

function Services() {
  return (
    <section id="leistungen" className="py-24 px-6 md:px-8 max-w-7xl mx-auto w-full">
      <div className="mb-14">
        <div className="flex items-center gap-2 text-brand-dark text-sm font-bold tracking-widest uppercase mb-4">
          <Grid className="w-4 h-4" />
          <span>Fachexpertise</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-brand-dark">Unsere Spezialgebiete</h2>
        <p className="text-gray-600 mt-4 max-w-2xl text-lg font-sans">
          Jedes Objekt stellt andere Anforderungen. Wir bieten gezielte <strong>Landingpages und Konzepte</strong> für jede Branche an, um den optimalen Qualitätsstandard zu gewährleisten.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {servicesList.map((service, i) => (
          <ServiceCard key={i} title={service.title} desc={service.desc} img={service.img} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, img, delay }: { title: string, desc: string, img: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative h-[340px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
    >
      <div className="absolute inset-0 bg-brand-dark">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 p-6 w-full transform group-hover:-translate-y-2 transition-transform duration-300">
        <h3 className="text-2xl font-semibold text-white mb-2 font-outfit tracking-tight">{title}</h3>
        <p className="text-white/80 text-sm mb-4 leading-relaxed line-clamp-3">
          {desc}
        </p>
        <div className="flex items-center text-brand-light font-bold text-sm gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <span>Details ansehen</span>
          <Plus className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

const reviews = [
  { name: "Michael Weber", role: "Geschäftsführer", text: "Endlich eine Reinigungsfirma in Karlsruhe, bei der alles klappt. Zuverlässig, pünktlich und das Büro glänzt. Die Kommunikation lief hervorragend. Absolut empfehlenswert!" },
  { name: "Sabine F.", role: "Praxisleitung", text: "Wir lassen unsere Praxisräume täglich von ACAT reinigen. Die Hygienevorschriften und DSGVO-Standards werden strikt eingehalten. Top Preis-Leistungs-Verhältnis." },
  { name: "Thomas Krüger", role: "Immobilienverwalter", text: "Nach unserem Umbau hat das Team die Baureinigung übernommen. Sehr gründlich, blitzschnell und ein faires Angebot. Das Treppenhaus wird jetzt auch von ihnen gemacht." },
  { name: "Laura Keller", role: "Kita-Leiterin", text: "Für unsere Kita ist absolute Sauberkeit oberste Priorität. Das Team von ACAT arbeitet extrem genau und verwendet auf Wunsch sogar spezielle milde Reinigungsmittel." },
  { name: "Sven Müller", role: "Studioleiter", text: "Unser Fitnessstudio wird täglich gereinigt. Man merkt sofort, dass hier Profis am Werk sind. Die Geräte und Umkleiden sind makellos." },
  { name: "Elena Schmidt", role: "Office Managerin", text: "Wir waren lange auf der Suche nach einem guten Reinigungsservice. Mit ACAT haben wir den perfekten Partner gefunden. Das Team ist sehr freundlich." },
  { name: "Markus Bauer", role: "Architekt", text: "Die Bauendreinigung wurde termingerecht und professionell durchgeführt. So konnten wir das Objekt pünktlich an den Bauherren übergeben." },
  { name: "Katja Wagner", role: "Filialleiterin", text: "Unsere großen Schaufenster werden regelmäßig von ACAT gereinigt. Immer streifenfrei und ohne störende Unterbrechungen im laufenden Betrieb." },
  { name: "Dr. Johannes Vogt", role: "Zahnarzt", text: "Hygiene ist in meiner Praxis essenziell. ACAT erfüllt unsere hohen Anforderungen täglich aufs Neue. Ich kann den Service uneingeschränkt empfehlen." },
];

const firstColumn = reviews.slice(0, 3);
const secondColumn = reviews.slice(3, 6);
const thirdColumn = reviews.slice(6, 9);

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof reviews;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div className="p-8 rounded-3xl shadow-lg max-w-xs w-full bg-white flex flex-col justify-between" key={i}>
                  <div className="text-gray-700 leading-relaxed mb-6">"{text}"</div>
                  <div className="flex items-center gap-3 mt-auto border-t border-gray-50 pt-5">
                    <div className="flex flex-col">
                      <div className="font-semibold text-gray-900 leading-tight">{name}</div>
                      <div className="text-sm text-gray-400 font-medium leading-tight mt-1">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

function Reviews() {
  return (
    <section id="bewertungen" className="py-24 bg-brand-bg px-6 border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mx-auto mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
              <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center font-bold text-3xl text-brand-dark border-4 border-gray-50 uppercase tracking-tighter">
                  G
              </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-outfit text-brand-dark">Das sagen unsere Kunden in Karlsruhe</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <span className="text-xl font-bold text-gray-900">5.0</span>
                  <div className="flex gap-1 text-yellow-500">
                      {[1,2,3,4,5].map(i => <Star key={i} className="fill-current w-5 h-5" />)}
                  </div>
              </div>
              <span className="text-gray-500 font-medium text-sm">Automatisierte Google-Bewertungen</span>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}

function ContactAndMap() {
    return (
        <section id="kontakt" className="py-24 px-6 md:px-8 max-w-7xl mx-auto w-full relative">
            <div className="bg-brand-dark text-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col lg:flex-row">
                <div className="w-full lg:w-5/12 p-10 lg:p-16 flex flex-col justify-center">
                    <span className="text-brand-light font-bold text-sm tracking-widest uppercase mb-4 block">Regional vernetzt</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-outfit">Wir sind für Sie da in Karlsruhe</h2>
                    <p className="text-white/80 mb-12 max-w-md leading-relaxed text-lg font-sans">
                        Kontaktieren Sie uns für ein unverbindliches Angebot. Schnelle Reaktionszeiten und transparente Preisgestaltung.
                    </p>

                    <div className="space-y-8">
                        <a href={TELEPHONE_HREF} className="flex items-center gap-5 group">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-light transition-all duration-300">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-white/50 mb-1 font-medium tracking-wide uppercase">Rufen Sie uns an</p>
                                <p className="text-xl md:text-2xl font-bold font-outfit">{TELEPHONE}</p>
                            </div>
                        </a>
                        <a href="mailto:info@acatgebaeudereinigung.de" className="flex items-center gap-5 group">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-light transition-all duration-300">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-white/50 mb-1 font-medium tracking-wide uppercase">E-Mail schreiben</p>
                                <p className="text-lg md:text-xl font-bold font-outfit break-all">info@acatgebaeudereinigung.de</p>
                            </div>
                        </a>
                        <div className="flex items-center gap-5 pt-4 border-t border-white/10 mt-4">
                            <div className="w-14 h-14 bg-brand-light/20 text-brand-light rounded-full flex items-center justify-center">
                                <Check className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-white/50 mb-1 font-medium tracking-wide uppercase">Einsatzgebiet</p>
                                <p className="text-lg font-semibold font-outfit">Stadt Karlsruhe & Umland</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full lg:w-7/12 min-h-[450px]">
                    <iframe 
                        src="https://maps.google.com/maps?q=Karlsruhe&t=&z=12&ie=UTF8&iwloc=&output=embed" 
                        width="100%" 
                        height="100%" 
                        frameBorder="0"
                        title="Karte von Karlsruhe"
                        style={{ border: 0 }}
                        loading="lazy"
                        className="w-full h-full opacity-90 contrast-125 saturate-50"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

function Footer() {
  return (
    <footer className="w-full max-w-[1400px] mx-auto lg:px-4 mb-4">
      <div className="rounded-[2.5rem] bg-white overflow-hidden shadow-sm border border-gray-100">
        {/* Top visually appealing split section */}
        <div className="flex flex-col md:flex-row h-auto md:h-[400px]">
            <div className="w-full md:w-5/12 bg-gray-50 p-12 lg:p-16 flex flex-col justify-between border-r border-gray-100">
            <div className="space-y-4">
                <div className="flex items-center mb-6">
                    <img src="https://s1.directupload.eu/images/260520/uqx4boxv.webp" alt="ACAT Logo" className="h-12 md:h-14 w-auto" />
                </div>
                <h3 className="text-brand-dark font-bold text-3xl font-outfit leading-tight mb-2">Ihr Meisterbetrieb für Sauberkeit.</h3>
                <p className="text-gray-600 font-sans max-w-sm">Perfekte Gebäudereinigung mit System und Expertise. Für gewerbliche und private Kunden in Karlsruhe.</p>
            </div>
            <div className="mt-12 flex items-center gap-3 text-brand-dark">
                <Shield className="w-6 h-6 text-brand-light" /> <span className="text-sm font-semibold tracking-wide">Zertifizierte Qualitätsstandards</span>
            </div>
            </div>
            <div className="w-full md:w-7/12 h-[300px] md:h-full overflow-hidden relative">
            <img 
                src={FOOTER_IMG} 
                alt="Reinigungsfachkraft im Einsatz" 
                className="w-full h-full object-cover object-center" 
                loading="lazy"
            />
            <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply" />
            </div>
        </div>
        
        {/* Actual Footer Info Line */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-14 px-10 lg:px-16 gap-10">
            
            {/* Navigation */}
            <div className="flex flex-wrap gap-8 font-semibold text-gray-700 font-outfit text-base">
                <a href="/#leistungen" className="hover:text-brand-dark transition-colors">Leistungen</a>
                <a href="/#bewertungen" className="hover:text-brand-dark transition-colors">Bewertungen</a>
                <a href="/#kontakt" className="hover:text-brand-dark transition-colors">Kontakt</a>
            </div>

            {/* Contacts */}
            <div className="flex flex-col gap-3 font-medium text-gray-800 text-sm font-sans flex-shrink-0">
            <p className="flex items-center gap-2"><span className="w-12 text-gray-400 uppercase tracking-widest text-xs font-bold">Tel:</span> <a href={TELEPHONE_HREF} className="hover:text-brand-dark font-semibold">{TELEPHONE}</a></p>
            <p className="flex items-center gap-2"><span className="w-12 text-gray-400 uppercase tracking-widest text-xs font-bold">Mail:</span> <a href="mailto:info@acatgebaeudereinigung.de" className="hover:text-brand-dark font-semibold">info@acatgebaeudereinigung.de</a></p>
            </div>

            {/* Socials - Req: Insta and TikTok */}
            <div className="flex gap-4">
                <a href="#" aria-label="Folgen Sie uns auf Instagram" className="p-4 rounded-full bg-gray-50 hover:bg-brand-dark text-brand-dark hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm border border-gray-100">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Folgen Sie uns auf TikTok" className="p-4 rounded-full bg-gray-50 hover:bg-brand-dark text-brand-dark hover:text-white transition-all duration-300 transform hover:scale-105 shadow-sm border border-gray-100">
                    <TikTokIcon className="w-5 h-5" />
                </a>
            </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="py-6 px-10 lg:px-16 border-t border-gray-100 bg-gray-50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6 font-sans">
            <div className="flex flex-wrap gap-6 font-medium">
                <Link to="/impressum" className="hover:text-brand-dark transition-colors">Impressum</Link>
                <Link to="/datenschutz" className="hover:text-brand-dark transition-colors">Datenschutzerklärung</Link>
                <Link to="/agb" className="hover:text-brand-dark transition-colors">AGB</Link>
            </div>
            <p className="font-semibold text-gray-400">&copy; {new Date().getFullYear()} ACAT Gebäudereinigung</p>
        </div>
      </div>
    </footer>
  );
}

function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    }

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[420px] bg-white p-6 md:p-8 rounded-3xl shadow-2xl z-[100] border border-gray-100 flex flex-col gap-5 font-sans"
            >
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-brand-dark text-xl font-outfit mb-1">Wir verwenden Cookies \uD83C\uDF6A</h3>
                        <p className="text-sm text-gray-500 font-medium">DSGVO-konforme Datenschutzeinstellungen</p>
                    </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Um unsere Webseite für Sie optimal zu gestalten und unser Angebot auf Ihre Bedürfnisse in Karlsruhe abzustimmen, verwenden wir Cookies. Details finden Sie in unserer <Link to="/datenschutz" className="font-semibold text-brand-dark underline hover:text-brand-light transition-colors">Datenschutzerklärung</Link>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button onClick={acceptCookies} className="flex-1 bg-brand-dark text-white rounded-xl py-3.5 text-sm font-bold shadow-md hover:bg-brand-dark/90 hover:-translate-y-0.5 transition-all outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark">
                        Alle akzeptieren
                    </button>
                    <button onClick={acceptCookies} className="flex-1 bg-gray-50 text-gray-600 rounded-xl py-3.5 text-sm font-semibold border border-gray-200 hover:bg-gray-100 hover:-translate-y-0.5 transition-all outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                        Nur essenzielle
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

function Home() {
  return (
    <div className="min-h-screen bg-brand-bg relative selection:bg-brand-light/30 scroll-smooth">
      <Hero />
      <Services />
      <Reviews />
      <ContactAndMap />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
      </Routes>
    </Router>
  );
}
