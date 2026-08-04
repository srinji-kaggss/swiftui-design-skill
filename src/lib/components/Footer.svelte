<section id="contact" class="footer">
  <div class="footer-inner">
    <div class="footer-cta">
      <p class="footer-kicker">Have a project?</p>
      <a href="mailto:hello@studio.ch" class="footer-link">
        hello@studio.ch
      </a>
    </div>
    <div class="footer-meta">
      <p>Montreux, Switzerland</p>
      <p>—</p>
      <p class="footer-copy">© 2026 Studio. All rights reserved.</p>
    </div>
  </div>
</section>

<style>
  .footer {
    border-top: 1px solid var(--paper-faint);
    padding: var(--space-2xl) var(--space-md);
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: var(--space-lg);
  }

  .footer-kicker {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    margin-bottom: var(--space-xs);
  }

  .footer-link {
    font-family: var(--font-display);
    font-size: clamp(2rem, 8vw, 6rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    text-decoration: none;
    color: var(--paper);
    transition: color 0.2s var(--ease-out);
  }

  .footer-link:hover {
    color: var(--accent);
  }

  .footer-meta {
    font-size: 0.8125rem;
    color: var(--paper-dim);
    text-align: right;
    line-height: 1.8;
  }

  .footer-copy {
    color: var(--paper-faint);
    font-family: var(--font-mono);
    font-size: 0.6875rem;
  }

  @media (max-width: 640px) {
    .footer-meta {
      text-align: left;
    }
  }
</style>
