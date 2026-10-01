<script lang="ts">
  import '../app.css';
  import LeftMenu from '$lib/components/LeftMenu.svelte';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
</script>

<svg style="position: absolute; width: 0; height: 0;">
  <defs>
    <filter id="pencil-texture">
      <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </defs>
</svg>

<div class="flex h-screen overflow-hidden">
  <LeftMenu />
  
  <div class="flex-1 flex flex-col overflow-hidden">
    <header class="sketched-border px-4 h-16 flex justify-between items-center pencil-line">
      <div class="handwritten text-2xl">Tra il serio e l'aceto</div>
      <LanguageSwitcher />
    </header>
    
    <main class="flex-1 overflow-y-auto p-8 pencil-line">
      <slot />
    </main>
  </div>
</div>
