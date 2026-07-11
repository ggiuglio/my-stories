<script lang="ts">
  import { currentLanguage, t, type Language } from '$lib/i18n';
  
  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'it', label: 'IT' },
    { code: 'de', label: 'DE' }
  ];
  
  function switchLanguage(lang: Language) {
    currentLanguage.set(lang);
  }
</script>

<div class="flex gap-2 items-center">
  <span class="text-sm">{$t('ui.language')}:</span>
  <div class="flex gap-1">
    {#each languages as lang}
      <button
        class="px-3 py-1 text-sm transition-all"
        class:sketched-button={$currentLanguage === lang.code}
        class:bg-white={$currentLanguage === lang.code}
        class:text-gray-600={$currentLanguage !== lang.code}
        class:hover:text-gray-900={$currentLanguage !== lang.code}
        onclick={() => switchLanguage(lang.code)}
      >
        {lang.label}
      </button>
    {/each}
  </div>
</div>
