<script lang="ts">
  import type { Language } from '$lib/i18n';

  let { lang }: { lang: Language } = $props();

  const labels: Record<Language, string> = {
    en: '(automatically translated)',
    it: '(tradotto automaticamente)',
    de: '(automatisch übersetzt)'
  };
</script>

<span class="text-base font-normal text-gray-500 italic whitespace-nowrap">{labels[lang]}</span>
