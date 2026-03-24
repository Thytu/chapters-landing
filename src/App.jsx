function App() {
  return (
    <>
      {/* Header */}
      <header className="top-0 z-50 bg-background">
        <div className="flex justify-between items-center w-full px-8 py-12 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-6">
<span className="font-headline text-2xl tracking-tighter text-stone-900">
              Chapter One
            </span>
          </div>
          <a href="https://tally.so/r/rjV6Pl" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-3 font-label text-[0.625rem] tracking-[0.2em] uppercase transition-opacity duration-300 active:opacity-80 inline-block">
            Apply
          </a>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-8 overflow-hidden">
        {/* Hero */}
        <section className="mt-12 mb-24 folio-grid">
          <div className="col-start-1 col-span-12 md:col-start-3 md:col-span-8 py-24">
            <h1 className="font-headline text-6xl md:text-8xl leading-[1.1] tracking-tight mb-12">
              A Parisian Assembly{" "}
              <br />
              <span className="italic font-normal">for the few.</span>
            </h1>
            <div className="folio-grid items-start">
              <div className="col-span-12 md:col-span-8">
                <p className="text-xl md:text-2xl leading-relaxed text-stone-600 mb-12 max-w-2xl">
                  The 17th April 2026, we invite the world's most deliberate
                  founders and builders to a private residence in the 7th
                  Arrondissement. This is not a conference; it is a curated
                  dialogue.
                </p>
                <div className="flex items-center gap-8">
                  <a href="https://tally.so/r/rjV6Pl" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-10 py-4 font-label text-[0.75rem] tracking-[0.2em] uppercase inline-block">
                    Join the Parisian Assembly
                  </a>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 pt-4 border-t border-stone-200">
                <p className="font-label text-[0.625rem] tracking-[0.2em] uppercase text-stone-400 mb-4">
                  Date &amp; Location
                </p>
                <p className="font-headline text-lg italic">
                  17th of April MMXXVI
                </p>
                <p className="font-headline text-lg">Paris, Rive Gauche</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Anchor */}
        <section className="mb-32">
          <div className="w-full aspect-[21/9] bg-surface-container overflow-hidden">
            <img
              alt="Parisian rooftops at dawn"
              className="w-full h-full object-cover opacity-90 grayscale-[0.2] contrast-125"
              src="/hero.png"
            />
          </div>
          <div className="mt-8 flex justify-end">
            <p className="font-label text-[0.625rem] tracking-[0.2em] uppercase text-stone-400 italic">
              Plate No. 04 — The 7th Arrondissement
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-48 folio-grid">
          <div className="col-span-12 md:col-span-4 md:col-start-2">
            <h2 className="font-headline text-4xl leading-tight mb-8">
              The Philosophy of Intent
            </h2>
            <p className="text-stone-500 uppercase font-label text-[0.625rem] tracking-[0.3em] mb-12">
              I. Literacy &amp; Restraint
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-lg leading-[1.8] text-on-surface mb-8">
              The most important breakthroughs happen in the quiet moments
              between sessions. Our program is intentionally sparse, leaving room
              for the serendipity of high-level discourse.
            </p>
            <p className="text-lg leading-[1.8] text-on-surface">
              For our partners, this means access to an environment where your
              presence is felt through quality, not volume. We offer a limited
              number of sponsorship roles designed to integrate seamlessly into
              the experience.
            </p>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section id="folio-tiers" className="mb-48 max-w-6xl mx-auto scroll-mt-12">
          <div className="mb-20 text-center">
            <p className="font-label text-[0.625rem] tracking-[0.4em] uppercase text-stone-400 mb-6">Partnership Opportunities</p>
            <h3 className="font-headline text-4xl italic">The Folio Tiers</h3>
            <div className="h-[0.0625rem] w-24 bg-primary/20 mx-auto mt-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[0.0625rem] bg-stone-200 border-y border-stone-200">
            {/* Tier I */}
            <div className="bg-background p-12 flex flex-col justify-between min-h-[34.375rem] transition-all duration-500 hover:scale-[1.02] hover:z-10 hover:shadow-lg">
              <div>
                <p className="font-label text-[0.625rem] tracking-[0.3em] uppercase text-stone-400 mb-10">Tier I</p>
                <h4 className="font-headline text-3xl mb-8 tracking-tight transition-all">The Supporter</h4>
                <p className="text-stone-600 leading-[1.8] mb-12 text-[0.9375rem]">Your name tied to the evening. A seat at the table, and a window into who's in the room.</p>
                <ul className="space-y-5 font-label text-[0.625rem] tracking-[0.2em] uppercase text-stone-500">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary/40 rounded-full" /> Name associated with the event</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary/40 rounded-full" /> 1 vetted guest from your team</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary/40 rounded-full" /> Anonymized guest list profile</li>
                </ul>
              </div>
              <a href="https://tally.so/r/rjV6Pl" target="_blank" rel="noopener noreferrer" className="block w-full border border-stone-200 py-4 font-label text-[0.625rem] tracking-[0.3em] uppercase text-stone-600 hover:border-primary hover:text-primary transition-all duration-500 text-center">Inquire</a>
            </div>
            {/* Tier II — Principal */}
            <div className="bg-surface-container-low p-12 flex flex-col justify-between min-h-[34.375rem] relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:z-10 hover:shadow-lg">
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-primary/20 text-4xl font-extralight">auto_awesome</span>
              </div>
              <div>
                <p className="font-label text-[0.625rem] tracking-[0.3em] uppercase text-primary mb-10">Tier II — Principal</p>
                <h4 className="font-headline text-3xl mb-8 tracking-tight italic">The Partner</h4>
                <p className="text-stone-700 leading-[1.8] mb-12 text-[0.9375rem]">A real presence in the room. Your people are part of the matchmaking, and the room knows who you are.</p>
                <ul className="space-y-5 font-label text-[0.625rem] tracking-[0.2em] uppercase text-stone-600">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Everything in Supporter</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> 2 vetted guests from your team</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> Inclusion in the matchmaking lists</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-primary rounded-full" /> A personal introduction to the room</li>
                </ul>
              </div>
              <a href="https://tally.so/r/rjV6Pl" target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-white py-4 font-label text-[0.625rem] tracking-[0.3em] uppercase hover:opacity-90 transition-all duration-500 shadow-sm text-center">Select Role</a>
            </div>
            {/* Tier III */}
            <div className="bg-background p-12 flex flex-col justify-between min-h-[34.375rem] transition-all duration-500 hover:scale-[1.02] hover:z-10 hover:shadow-lg">
              <div>
                <p className="font-label text-[0.625rem] tracking-[0.3em] uppercase text-stone-400 mb-10">Tier III</p>
                <h4 className="font-headline text-3xl mb-8 tracking-tight transition-all">The Presenting</h4>
                <p className="text-stone-600 leading-[1.8] mb-12 text-[0.9375rem]">The deepest involvement. You shape the guest list, you address the room, your brand is woven into the event.</p>
                <ul className="space-y-5 font-label text-[0.625rem] tracking-[0.2em] uppercase text-stone-500">
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary/40 rounded-full" /> Everything in Partner</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary/40 rounded-full" /> Co-branding on all event materials</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary/40 rounded-full" /> A dedicated moment to address the room</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary/40 rounded-full" /> Suggest names for the guest list</li>
                  <li className="flex items-center gap-3"><span className="w-1 h-1 bg-primary/40 rounded-full" /> Direct introductions post-event</li>
                </ul>
              </div>
              <a href="https://tally.so/r/rjV6Pl" target="_blank" rel="noopener noreferrer" className="block w-full border border-stone-200 py-4 font-label text-[0.625rem] tracking-[0.3em] uppercase text-stone-600 hover:border-primary hover:text-primary transition-all duration-500 text-center">Apply for Seat</a>
            </div>
          </div>
        </section>

        {/* Organizers */}
        <section className="mb-48 folio-grid">
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <p className="font-label text-[0.625rem] tracking-[0.3em] uppercase text-stone-400 mb-6">Behind the Gathering</p>
            <h3 className="font-headline text-2xl italic mb-16">The Curators</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Valentin */}
              <a href="https://www.linkedin.com/in/valentin-de-matos/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center transition-transform duration-500 hover:scale-105 cursor-pointer">
                <img src="/valentin.jpg" alt="Valentin de Matos" className="w-32 h-32 rounded-full object-cover grayscale mb-6" />
                <h4 className="font-headline text-lg mb-1">Valentin de Matos</h4>
                <p className="text-stone-500 text-sm mb-3">AI Engineer at Delphi</p>
              </a>
              {/* Loïc */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-surface-container-high flex items-center justify-center mb-6">
                  <span className="font-headline text-3xl text-stone-400">L</span>
                </div>
                <h4 className="font-headline text-lg mb-1">Loïc</h4>
                <p className="text-stone-500 text-sm">DeFi & Web3</p>
              </div>
              {/* Yoan */}
              <a href="https://www.linkedin.com/in/yoandicosmo/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center transition-transform duration-500 hover:scale-105 cursor-pointer">
                <img src="/yoan.jpg" alt="Yoan Di Cosmo" className="w-32 h-32 rounded-full object-cover grayscale mb-6" />
                <h4 className="font-headline text-lg mb-1">Yoan Di Cosmo</h4>
                <p className="text-stone-500 text-sm mb-3">President of Unaite</p>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-12 bg-stone-900 text-stone-100 p-8 md:p-24 folio-grid items-center">
          <div className="col-span-12 md:col-span-7">
            <p className="font-label text-[0.625rem] tracking-[0.4em] uppercase text-stone-400 mb-8">
              By Invitation Only
            </p>
            <h2 className="font-headline text-3xl md:text-7xl leading-tight mb-12">
              Shape the next{" "}
              <br className="hidden md:block" />
              <span className="italic font-normal">Parisian Narrative.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col gap-8 items-start md:items-end">
            <p className="text-stone-400 font-headline italic text-xl max-w-sm md:text-right">
              Applications for sponsorship are open until April 7th, 2025. Only
              2 positions left available.
            </p>
            <a href="https://tally.so/r/rjV6Pl" target="_blank" rel="noopener noreferrer" className="bg-white text-stone-900 px-12 py-5 font-label text-[0.75rem] tracking-[0.2em] uppercase inline-block">
              Begin Application
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-stone-200/15 bg-background mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-20 w-full max-w-screen-2xl mx-auto">
          <div className="mb-8 md:mb-0">
            <span className="font-headline italic text-lg text-stone-900">
              Chapter One
            </span>
          </div>
          <div className="mt-8 md:mt-0 font-label uppercase text-[0.625rem] tracking-[0.2em] text-stone-500">
            Paris MMXXVI — By Invitation Only
          </div>
        </div>
      </footer>
    </>
  );
}


export default App;
