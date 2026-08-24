import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BusFront,
  Check,
  ChevronDown,
  Clock3,
  Headphones,
  Luggage,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Star,
  TicketCheck,
  Users,
  X,
} from 'lucide-react'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const contactNumber = '0753753266'
const whatsappNumber = '254753753266'

const routes = [
  { from: 'Kigali', to: 'Kampala', frequency: '5 buses daily', price: 'RWF 55,000' },
  { from: 'Kigali', to: 'Nairobi', frequency: '1 bus daily', price: 'RWF 75,000' },
  { from: 'Kampala', to: 'Kigali', frequency: '5 buses daily', price: 'UGX 100,000' },
  { from: 'Kampala', to: 'Nairobi', frequency: '2 buses daily', price: 'UGX 120,000' },
  { from: 'Nairobi', to: 'Kampala', frequency: '2 buses daily', price: 'KES 4,000' },
  { from: 'Nairobi', to: 'Mombasa', frequency: '3 buses daily', price: 'KES 2,100' },
  { from: 'Nairobi', to: 'Kisumu', frequency: '2 buses daily', price: 'KES 1,600' },
  { from: 'Juba', to: 'Kampala', frequency: '1 bus daily', price: 'SSP 600,000' },
  { from: 'Kampala', to: 'Juba', frequency: '1 bus daily', price: 'SSP 50,000' },
]

const services = [
  {
    title: 'Cross-border trips',
    description: 'Comfortable coach travel connecting key cities across East Africa with dependable daily departures.',
    image: '/assets/service-trips.png',
    icon: BusFront,
  },
  {
    title: 'Cross-border delivery',
    description: 'A practical way to send parcels between Kenya, Rwanda, Uganda and South Sudan through our route network.',
    image: '/assets/service-delivery.png',
    icon: PackageCheck,
  },
  {
    title: 'Luggage handling',
    description: 'Helpful handling from boarding through arrival, so your bags travel securely alongside you.',
    image: '/assets/service-luggage.png',
    icon: Luggage,
  },
]

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedRoute, setSelectedRoute] = useState(`${routes[0].from} to ${routes[0].to}`)
  const [travelDate, setTravelDate] = useState('')
  const [passengers, setPassengers] = useState('1')

  const filteredRoutes = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return routes.slice(0, 6)
    return routes.filter(({ from, to }) => `${from} ${to}`.toLowerCase().includes(normalized))
  }, [query])

  const bookingMessage = `Hello Trinity Express, I would like to book ${passengers} seat(s) for ${selectedRoute}${travelDate ? ` on ${travelDate}` : ''}. Please assist me.`

  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>East Africa, connected by road.</span>
          <div className="topbar-actions">
            <a href={`tel:${contactNumber}`}><Phone size={15} /> {contactNumber}</a>
            <a href={whatsappLink('Hello Trinity Express, I need travel assistance.')} target="_blank" rel="noreferrer">WhatsApp agent</a>
          </div>
        </div>
      </div>

      <header className="nav-wrap">
        <div className="shell nav-inner">
          <a className="brand" href="#home" aria-label="Trinity Express home">
            <span className="brand-mark"><BusFront size={25} /></span>
            <span><strong>TRINITY</strong><em>EXPRESS</em></span>
          </a>
          <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
            {['Home', 'Services', 'Routes', 'About', 'Booking', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </nav>
          <a className="nav-cta" href="#booking">Book a seat <ArrowRight size={17} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Trusted journeys across East Africa</div>
            <h1>More cities.<br /><span>One dependable ride.</span></h1>
            <p>Book comfortable cross-border bus travel, send parcels and move with confidence across our growing regional network.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#routes">Find your route <Search size={18} /></a>
              <a className="button button-quiet" href={`tel:${contactNumber}`}><Phone size={18} /> Call {contactNumber}</a>
            </div>
            <div className="hero-proof">
              <div><strong>9+</strong><span>Regional routes</span></div>
              <div><strong>4</strong><span>Connected countries</span></div>
              <div><strong>Daily</strong><span>Travel support</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-frame">
              <img src="/assets/trinity-bus.png" alt="Trinity Express coach on a regional route" />
            </div>
            <div className="route-ribbon">
              <MapPin size={19} />
              <div><small>Popular connection</small><strong>Kigali → Kampala</strong></div>
              <span>Daily</span>
            </div>
            <div className="floating-stamp"><ShieldCheck size={24} /><span>Safe, reliable<br />cross-border travel</span></div>
          </div>
        </div>
      </section>

      <section className="route-finder" aria-label="Route search">
        <div className="shell finder-card">
          <div className="finder-title"><span>01</span><div><small>Start here</small><strong>Where are you travelling?</strong></div></div>
          <label className="search-field"><Search size={20} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Kigali, Kampala or Nairobi" /><button onClick={() => setQuery('')} aria-label="Clear route search">{query && <X size={18} />}</button></label>
          <a className="button button-dark" href="#routes">View routes <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="section-heading split-heading">
          <div><p className="kicker">What we provide</p><h2>Travel services built around the journey.</h2></div>
          <p>From the seat you reserve to the parcel you send, our services keep movement between East African cities simple and personal.</p>
        </div>
        <div className="service-grid">
          {services.map(({ title, description, image, icon: Icon }, index) => (
            <article className="service-card" key={title}>
              <div className="service-image"><img src={image} alt="" /><span>0{index + 1}</span></div>
              <div className="service-content"><Icon size={24} /><h3>{title}</h3><p>{description}</p><a href="#booking">Book with an agent <ArrowRight size={16} /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="routes-section" id="routes">
        <div className="shell">
          <div className="section-heading split-heading light-heading">
            <div><p className="kicker">Our routes</p><h2>Choose your next connection.</h2></div>
            <p>Search by origin or destination. Fares and frequency are shown as supplied and can be confirmed directly with the booking agent.</p>
          </div>
          <label className="route-search"><Search size={20} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search routes" /></label>
          <div className="route-grid">
            {filteredRoutes.map((route) => (
              <article className="route-card" key={`${route.from}-${route.to}`}>
                <div className="route-cities"><div><small>From</small><strong>{route.from}</strong></div><ArrowRight /><div><small>To</small><strong>{route.to}</strong></div></div>
                <div className="route-meta"><span><Clock3 size={16} /> {route.frequency}</span><strong>{route.price}</strong></div>
                <button onClick={() => { setSelectedRoute(`${route.from} to ${route.to}`); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }) }}>Book this route <ArrowRight size={16} /></button>
              </article>
            ))}
          </div>
          {filteredRoutes.length === 0 && <div className="empty-state"><BusFront /><h3>No matching route yet</h3><p>Call the booking agent to ask about another destination.</p><a href={`tel:${contactNumber}`}>{contactNumber}</a></div>}
        </div>
      </section>

      <section className="section shell about-layout" id="about">
        <div className="photo-collage">
          <img className="photo-driver" src="/assets/trinity-driver.png" alt="Professional Trinity Express driver preparing for departure" />
          <img className="photo-interior" src="/assets/trinity-interior.png" alt="Comfortable coach interior" />
          <div className="experience-card"><strong>4</strong><span>countries<br />connected</span></div>
        </div>
        <div className="about-copy">
          <p className="kicker">About Trinity Express</p>
          <h2>Travel feels easier when the details are handled.</h2>
          <p>Trinity Express connects communities through reliable cross-border transport. Our focus is straightforward: clear routes, comfortable coaches and a real person ready to help you book.</p>
          <ul>
            <li><Check /> Daily regional route options</li>
            <li><Check /> Direct booking support</li>
            <li><Check /> Passenger and parcel services</li>
            <li><Check /> Simple WhatsApp confirmation</li>
          </ul>
          <a className="text-link" href="#booking">Reserve your seat <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className="strengths">
        <div className="shell">
          <div className="section-heading centered-heading"><p className="kicker">What sets us apart</p><h2>Service that stays with you.</h2></div>
          <div className="strength-grid">
            <article><Clock3 /><span>01</span><h3>Fast & reliable</h3><p>Routes run frequently between major cities, with direct support when plans need attention.</p></article>
            <article><Headphones /><span>02</span><h3>Customer-centred</h3><p>Speak to the same booking line for route questions, seat requests and travel assistance.</p></article>
            <article><Users /><span>03</span><h3>Cross-border expertise</h3><p>Regional knowledge helps passengers and parcels move confidently between countries.</p></article>
          </div>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="shell booking-layout">
          <div className="booking-copy">
            <p className="kicker">Book your trip</p>
            <h2>One message gets your journey moving.</h2>
            <p>Choose the route, date and number of travellers. Your request opens in WhatsApp for direct confirmation with the Trinity Express agent.</p>
            <div className="booking-contact"><span><Phone /></span><div><small>Booking line</small><a href={`tel:${contactNumber}`}>{contactNumber}</a></div></div>
          </div>
          <div className="booking-card">
            <label>Route<select value={selectedRoute} onChange={(event) => setSelectedRoute(event.target.value)}>{routes.map((route) => <option key={`${route.from}-${route.to}`}>{route.from} to {route.to}</option>)}</select><ChevronDown size={17} /></label>
            <div className="booking-row">
              <label>Travel date<input type="date" value={travelDate} onChange={(event) => setTravelDate(event.target.value)} /></label>
              <label>Passengers<select value={passengers} onChange={(event) => setPassengers(event.target.value)}>{['1', '2', '3', '4', '5'].map((count) => <option key={count}>{count}</option>)}</select><ChevronDown size={17} /></label>
            </div>
            <a className="button button-primary booking-button" href={whatsappLink(bookingMessage)} target="_blank" rel="noreferrer"><TicketCheck size={20} /> Continue on WhatsApp</a>
            <p className="form-note"><ShieldCheck size={15} /> No payment is collected on this website.</p>
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="shell testimonial-layout">
          <div className="quote-mark">“</div>
          <blockquote>
            <div className="stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} fill="currentColor" />)}</div>
            <p>The bus was clean, the journey felt organised, and I arrived in Kigali exactly when expected.</p>
            <footer>— J. N., regional passenger</footer>
          </blockquote>
          <img src="/assets/trinity-fleet.png" alt="Trinity Express coaches ready for departure" />
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="shell faq-layout">
          <div><p className="kicker">Common questions</p><h2>Before you travel.</h2><p>For anything not covered here, call or message the booking agent directly.</p></div>
          <div className="faq-list">
            {[
              ['How do I reserve a seat?', 'Choose a route in the booking panel and continue to WhatsApp. The agent confirms availability and next steps.'],
              ['Can I send a parcel without travelling?', 'Yes. Cross-border delivery is available on supported routes. Contact the agent with parcel details.'],
              ['Where do I confirm departure details?', 'Departure point and time are confirmed directly by the agent when your booking is completed.'],
            ].map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div><a className="brand footer-brand" href="#home"><span className="brand-mark"><BusFront size={25} /></span><span><strong>TRINITY</strong><em>EXPRESS</em></span></a><p>Reliable regional travel and delivery across East Africa.</p></div>
          <div><small>Explore</small><a href="#services">Services</a><a href="#routes">Routes</a><a href="#about">About</a></div>
          <div><small>Book directly</small><a href={`tel:${contactNumber}`}>{contactNumber}</a><a href={whatsappLink('Hello Trinity Express, I would like to make a booking.')} target="_blank" rel="noreferrer">WhatsApp agent</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Trinity Express</span><span>Travel farther. Stay connected.</span></div>
      </footer>

      <div className="floating-actions" aria-label="Quick contact actions">
        <a className="whatsapp-action" href={whatsappLink('Hello Trinity Express, I need help with a booking.')} target="_blank" rel="noreferrer"><span>WhatsApp</span><Headphones /></a>
        <a className="call-action" href={`tel:${contactNumber}`}><span>Call agent</span><Phone /></a>
      </div>
    </main>
  )
}
