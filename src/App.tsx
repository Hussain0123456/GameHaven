import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, 
  Gamepad2, 
  Trophy, 
  Users, 
  Zap, 
  ChevronRight, 
  Menu, 
  X, 
  Calendar, 
  Clock, 
  User,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// --- Types ---

type Platform = 'PC' | 'Console';

interface BookingData {
  platform: Platform | null;
  date: string;
  duration: string;
  name: string;
  email: string;
}

// --- Components ---

const Navbar = ({ onBookClick }: { onBookClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gh-bg/80 backdrop-blur-md py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gh-accent rounded-lg flex items-center justify-center neon-glow">
            <Zap className="text-gh-bg fill-gh-bg" size={24} />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter uppercase">Game<span className="text-gh-accent">Haven</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['PC Gaming', 'Console Lounge', 'Games', 'Memberships', 'Tournaments'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium hover:text-gh-accent transition-colors uppercase tracking-wider">
              {item}
            </a>
          ))}
          <button 
            onClick={onBookClick}
            className="bg-gh-accent text-gh-bg px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform active:scale-95 neon-glow"
          >
            Book a Station
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-gh-card border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {['PC Gaming', 'Console Lounge', 'Games', 'Memberships', 'Tournaments'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">
                  {item}
                </a>
              ))}
              <button 
                onClick={() => { onBookClick(); setIsMobileMenuOpen(false); }}
                className="bg-gh-accent text-gh-bg w-full py-4 rounded-xl font-bold uppercase tracking-widest"
              >
                Book a Station
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gh-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gh-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gh-accent/10 border border-gh-accent/20 text-gh-accent text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gh-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gh-accent"></span>
            </span>
            Premium Gaming Experience
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-6 uppercase italic">
            Level Up Your <span className="text-gh-accent">Reality.</span>
          </h1>
          <p className="text-gh-muted text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Experience gaming like never before. High-end PCs, next-gen consoles, and a community of elite players. Your journey to the top starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBookClick}
              className="bg-gh-accent text-gh-bg px-8 py-4 rounded-xl font-black text-lg uppercase tracking-wider flex items-center justify-center gap-2 hover:translate-y-[-4px] transition-all neon-glow"
            >
              Claim Your Station <ChevronRight size={20} />
            </button>
            <a 
              href="#memberships"
              className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-xl font-black text-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              View Packages
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-float">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000" 
              alt="Gaming Setup" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gh-bg via-transparent to-transparent" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-gh-accent/30 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 border-2 border-gh-secondary/30 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedGames = () => {
  const games = [
    {
      title: 'Counter-Strike 2',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600',
      description: 'The ultimate tactical shooter. Low latency, high refresh rates.',
      tag: 'Competitive'
    },
    {
      title: 'Minecraft',
      image: 'https://images.unsplash.com/photo-1607988597791-ad914ad33231?auto=format&fit=crop&q=80&w=600',
      description: 'Build, explore, and survive on our dedicated high-performance servers.',
      tag: 'Creative'
    },
    {
      title: 'GTA 5 / RP',
      image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=600',
      description: 'Immersive roleplay and high-octane action in Los Santos.',
      tag: 'Open World'
    }
  ];

  return (
    <section id="games" className="py-24 bg-gh-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl uppercase italic mb-4">Featured <span className="text-gh-accent">Titles</span></h2>
            <p className="text-gh-muted max-w-md">Optimized for the best performance. No lag, just pure gameplay.</p>
          </div>
          <button className="text-gh-accent font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
            See All Games <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {games.map((game, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden bg-gh-card border border-white/5"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gh-accent mb-2 block">{game.tag}</span>
                <h3 className="text-xl mb-2">{game.title}</h3>
                <p className="text-gh-muted text-sm leading-relaxed">{game.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueProps = () => {
  const props = [
    {
      icon: <Zap className="text-gh-accent" />,
      title: 'Zero Latency',
      desc: 'Fiber-optic connections and high-refresh monitors for the competitive edge.'
    },
    {
      icon: <Users className="text-gh-accent" />,
      title: 'Elite Community',
      desc: 'Join local tournaments and find your squad in a high-energy environment.'
    },
    {
      icon: <Monitor className="text-gh-accent" />,
      title: 'Pro-Grade Gear',
      desc: 'RTX 4090 PCs and PS5/Xbox Series X consoles at every station.'
    }
  ];

  return (
    <section className="py-24 bg-gh-card/30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {props.map((prop, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gh-accent/10 flex items-center justify-center mb-6 border border-gh-accent/20">
              {prop.icon}
            </div>
            <h3 className="text-2xl mb-3 uppercase italic">{prop.title}</h3>
            <p className="text-gh-muted leading-relaxed">{prop.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const MembershipTiers = () => {
  const tiers = [
    {
      name: 'Casual Gamer',
      price: '$29',
      period: 'month',
      features: ['5 Hours/Week', 'Standard PC Access', '10% Snack Discount', 'Discord Role'],
      accent: 'gh-accent'
    },
    {
      name: 'Pro Grinder',
      price: '$79',
      period: 'month',
      features: ['Unlimited Hours', 'VIP PC Access', 'Free Tournament Entry', '25% Snack Discount', 'Private Locker'],
      accent: 'gh-secondary',
      popular: true
    }
  ];

  return (
    <section id="memberships" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl uppercase italic mb-4">Membership <span className="text-gh-secondary">Tiers</span></h2>
          <p className="text-gh-muted">Choose the plan that fits your grind.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl border ${tier.popular ? 'border-gh-secondary bg-gh-secondary/5' : 'border-white/10 bg-gh-card'} flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gh-secondary text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl mb-2 uppercase italic">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">{tier.price}</span>
                <span className="text-gh-muted">/{tier.period}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className={tier.popular ? 'text-gh-secondary' : 'text-gh-accent'} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all ${tier.popular ? 'bg-gh-secondary text-white neon-glow-secondary' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>({
    platform: null,
    date: '',
    duration: '2 Hours',
    name: '',
    email: ''
  });

  if (!isOpen) return null;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gh-bg/90 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-xl bg-gh-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl uppercase italic">Reserve Your <span className="text-gh-accent">Station</span></h2>
              <p className="text-gh-muted text-xs uppercase tracking-widest mt-1">Step {step} of 3</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <p className="text-gh-muted">Choose your battleground:</p>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => { setData({...data, platform: 'PC'}); nextStep(); }}
                    className={`p-8 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 ${data.platform === 'PC' ? 'border-gh-accent bg-gh-accent/5' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                  >
                    <Monitor size={48} className={data.platform === 'PC' ? 'text-gh-accent' : 'text-gh-muted'} />
                    <span className="font-bold uppercase tracking-widest">PC Master Race</span>
                  </button>
                  <button 
                    onClick={() => { setData({...data, platform: 'Console'}); nextStep(); }}
                    className={`p-8 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 ${data.platform === 'Console' ? 'border-gh-accent bg-gh-accent/5' : 'border-white/5 bg-white/5 hover:border-white/20'}`}
                  >
                    <Gamepad2 size={48} className={data.platform === 'Console' ? 'text-gh-accent' : 'text-gh-muted'} />
                    <span className="font-bold uppercase tracking-widest">Console Lounge</span>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <label className="block text-sm font-bold uppercase tracking-widest text-gh-muted">Select Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gh-accent" size={18} />
                    <input 
                      type="date" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gh-accent transition-colors"
                      onChange={(e) => setData({...data, date: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-bold uppercase tracking-widest text-gh-muted">Duration</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['1 Hour', '2 Hours', '4 Hours'].map((d) => (
                      <button 
                        key={d}
                        onClick={() => setData({...data, duration: d})}
                        className={`py-3 rounded-xl border transition-all text-sm font-bold ${data.duration === d ? 'border-gh-accent bg-gh-accent/5 text-gh-accent' : 'border-white/10 bg-white/5'}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button onClick={prevStep} className="flex-1 py-4 rounded-xl border border-white/10 font-bold uppercase tracking-widest">Back</button>
                  <button onClick={nextStep} className="flex-1 py-4 rounded-xl bg-gh-accent text-gh-bg font-black uppercase tracking-widest neon-glow">Next</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <label className="block text-sm font-bold uppercase tracking-widest text-gh-muted">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gh-accent" size={18} />
                    <input 
                      type="text" 
                      placeholder="John Wick"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gh-accent transition-colors"
                      onChange={(e) => setData({...data, name: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-bold uppercase tracking-widest text-gh-muted">Email Address</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gh-accent" size={18} />
                    <input 
                      type="email" 
                      placeholder="john@high-table.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gh-accent transition-colors"
                      onChange={(e) => setData({...data, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button onClick={prevStep} className="flex-1 py-4 rounded-xl border border-white/10 font-bold uppercase tracking-widest">Back</button>
                  <button 
                    onClick={() => { alert('Booking Confirmed! See you at the zone.'); onClose(); }}
                    className="flex-1 py-4 rounded-xl bg-gh-accent text-gh-bg font-black uppercase tracking-widest neon-glow"
                  >
                    Confirm Booking
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-gh-card/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gh-accent rounded flex items-center justify-center">
            <Zap className="text-gh-bg fill-gh-bg" size={18} />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter uppercase">Game<span className="text-gh-accent">Haven</span></span>
        </div>
        
        <div className="flex gap-8 text-gh-muted text-sm uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-gh-accent transition-colors">Twitter</a>
          <a href="#" className="hover:text-gh-accent transition-colors">Discord</a>
          <a href="#" className="hover:text-gh-accent transition-colors">Twitch</a>
        </div>

        <p className="text-gh-muted text-xs uppercase tracking-widest">
          © 2026 GameHaven. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <ValueProps />
        <FeaturedGames />
        <MembershipTiers />
        
        {/* Call to Action Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gh-accent/5 skew-y-3" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase italic mb-8">
              Ready to <span className="text-gh-accent">Dominate?</span>
            </h2>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-gh-accent text-gh-bg px-12 py-6 rounded-2xl font-black text-2xl uppercase tracking-widest hover:scale-105 transition-transform neon-glow"
            >
              Book Your Spot Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
      
      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

