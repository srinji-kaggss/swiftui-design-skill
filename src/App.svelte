<script lang="ts">
  import './lib/tokens.css';
  import './lib/styles/base.css';
  import { scrollRevealAll } from './lib/motion/engine';
  import { initLocale } from './lib/i18n/context.svelte';
  import { initTheme } from './lib/theme.svelte';
  import { getRoute } from './lib/router.svelte';
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
  import LegalPage from './lib/components/LegalPage.svelte';
  import ReviewMode from './lib/components/ReviewMode.svelte';

  import { privacySections, privacyHero, privacySummary, privacyCta, privacyRelatedLinks } from './lib/data/legal/privacy';
  import { termsHero, termsSummary, termsCta, termsSupplementalLinks, termsRelatedLinks, termsMarkdown } from './lib/data/legal/terms';
  import { emailTermsSections, emailTermsHero, emailTermsSummary } from './lib/data/legal/email-terms';
  import { sellersTermsSections, sellersTermsHero, sellersTermsSummary } from './lib/data/legal/sellers-terms';

  initTheme();
  initLocale();
  const router = getRoute();

  let isLegal = $derived(router.current.segments.length > 0 && (
    router.current.segments[0] === 'privacy' ||
    router.current.segments[0] === 'terms'
  ));
</script>

<Preloader />
<CustomCursor />
<Header />

{#if isLegal}
  <div use:scrollRevealAll>
    <main class="home-content">
      {#if router.current.segments[0] === 'privacy'}
        <LegalPage
          eyebrow={privacyHero.eyebrow}
          title={privacyHero.title}
          heroBody={privacyHero.body}
          summaryEyebrow={privacySummary.eyebrow}
          summaryTitle={privacySummary.title}
          summaryBody={privacySummary.body.join(' ')}
          sections={privacySections}
          relatedLinks={privacyRelatedLinks}
          ctaTitle={privacyCta.title}
          ctaBody={privacyCta.body}
          ctaHref={privacyCta.href}
          ctaLabel={privacyCta.label}
        />
      {:else if router.current.segments[0] === 'terms' && router.current.segments.length === 1}
        <LegalPage
          eyebrow={termsHero.eyebrow}
          title={termsHero.title}
          heroBody={termsHero.body}
          summaryEyebrow={termsSummary.eyebrow}
          summaryTitle={termsSummary.title}
          summaryBody={termsSummary.body}
          relatedLinks={[...termsRelatedLinks, ...termsSupplementalLinks]}
          markdownContent={termsMarkdown}
          ctaTitle={termsCta.title}
          ctaBody={termsCta.body}
          ctaHref={termsCta.href}
          ctaLabel={termsCta.label}
        />
      {:else if router.current.segments[0] === 'terms' && router.current.segments[1] === 'email'}
        <LegalPage
          eyebrow={emailTermsHero.eyebrow}
          title={emailTermsHero.title}
          heroBody={emailTermsHero.body}
          summaryEyebrow={emailTermsSummary.eyebrow}
          summaryTitle={emailTermsSummary.title}
          summaryBody={emailTermsSummary.body}
          sections={emailTermsSections}
          ctaTitle="Legal and Compliance"
          ctaBody="For formal legal notices, privacy requests, or compliance inquiries."
          ctaHref="mailto:legal@logicalworks.ca"
          ctaLabel="legal@logicalworks.ca"
        />
      {:else if router.current.segments[0] === 'terms' && router.current.segments[1] === 'sellers'}
        <LegalPage
          eyebrow={sellersTermsHero.eyebrow}
          title={sellersTermsHero.title}
          heroBody={sellersTermsHero.body}
          summaryEyebrow={sellersTermsSummary.eyebrow}
          summaryTitle={sellersTermsSummary.title}
          summaryBody={sellersTermsSummary.body}
          sections={sellersTermsSections}
          ctaTitle="Legal and Compliance"
          ctaBody="For formal legal notices, privacy requests, or compliance inquiries."
          ctaHref="mailto:legal@logicalworks.ca"
          ctaLabel="legal@logicalworks.ca"
        />
      {/if}
    </main>
  </div>
{:else}
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
  </div>
{/if}

<Footer />
<ReviewMode />
