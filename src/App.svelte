<script lang="ts">
  import './lib/tokens.css';
  import './lib/styles/base.css';
  import { scrollRevealAll } from './lib/actions/scroll';
  import Preloader from './lib/components/Preloader.svelte';
  import CustomCursor from './lib/components/CustomCursor.svelte';
  import Header from './lib/components/Header.svelte';
  import Hero from './lib/components/Hero.svelte';
  import Intro from './lib/components/Intro.svelte';
  import Capabilities from './lib/components/Capabilities.svelte';
  import Work from './lib/components/Work.svelte';
  import Stats from './lib/components/Stats.svelte';
  import Team from './lib/components/Team.svelte';
  import Journal from './lib/components/Journal.svelte';
  import Contact from './lib/components/Contact.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<Preloader />
<CustomCursor />
<Header />
<div use:scrollRevealAll>
  <main class="home-content">
    <Hero />
    <Intro />
    <Capabilities />
    <Work />
    <Stats />
    <Team />
    <Journal />
  </main>
  <Contact />
  <Footer />
</div>
