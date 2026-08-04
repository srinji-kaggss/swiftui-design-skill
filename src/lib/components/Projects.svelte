<script lang="ts">
  import { projects } from '../data/projects';
  import ProjectCard from './ProjectCard.svelte';
</script>

<section id="work" class="projects">
  <div class="section-header">
    <span class="section-number">01</span>
    <h2 class="section-title">Selected Work</h2>
  </div>
  <div class="project-list">
    {#each projects as project, i (project.id)}
      <ProjectCard project={project} index={i} />
    {/each}
  </div>
</section>

<style>
  .projects {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--space-2xl) var(--space-md);
  }

  .section-header {
    display: flex;
    align-items: baseline;
    gap: var(--space-sm);
    margin-bottom: var(--space-xl);
  }

  .section-number {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--accent);
  }

  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 6vw, 5rem);
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .project-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-sm);
  }

  @media (min-width: 1024px) {
    .project-list {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
