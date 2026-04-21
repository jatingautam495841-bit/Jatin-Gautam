import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050508] relative z-10">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="text-xl font-black tracking-tighter text-white">
              JATIN / STUDIO
            </Link>
            <span>© 2024 JATIN STUDIO</span>
          </div>

          <div className="flex gap-10">
            <span>BASED IN NEW YORK</span>
            <span>EST. 2024</span>
          </div>

          <div className="text-right">
            <span>SCROLL FOR MORE (01/05)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
