<script lang="ts">
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';
  
  interface StoryItem {
    id: string;
    title: string;
    href: string;
  }
  
  interface Subsection {
    id: string;
    labelKey: string;
    items: StoryItem[];
  }
  
  interface MenuItem {
    id: string;
    labelKey: string;
    items: StoryItem[];
    subsections?: Subsection[];
  }
  
  const sections: MenuItem[] = [
    {
      id: 'stories',
      labelKey: 'nav.stories',
      items: [],
      subsections: [
        {
          id: 'other-stories',
          labelKey: 'nav.otherStories',
          items: [
            {
              id: 'hubert-herbert-emmenthal',
              title: "Hubert e Herbert e il mistero dei buchi dell'Emmenthal",
              href: '/stories/hubert-herbert-emmenthal'
            },
            {
              id: 'pablo-maiale-bellota',
              title: "Pablo il maiale di Bellota",
              href: '/stories/pablo-maiale-bellota'
            },
            {
              id: 'bruno-bradipo-amazonia',
              title: "Bruno: il bradipo più veloce dell'Amazonia",
              href: '/stories/bruno-bradipo-amazonia'
            },
            {
              id: 'die-frau-chefin',
              title: "Die Frau Chefin",
              href: '/stories/die-frau-chefin'
            }
          ]
        },
        {
          id: 'leopoldo',
          labelKey: 'nav.leopoldo',
          items: [
            {
              id: 'leopoldo-maiale-invisibile',
              title: "Leopoldo il maiale invisibile",
              href: '/stories/leopoldo-maiale-invisibile'
            },
            {
              id: 'coda-leopoldo',
              title: "La coda di Leopoldo",
              href: '/stories/coda-leopoldo'
            },
            {
              id: 'leopoldo-marmellata',
              title: "Leopoldo e la marmellata",
              href: '/stories/leopoldo-marmellata'
            },
            {
              id: 'quando-camillo-incontra-leopoldo',
              title: "Quando Camillo incontra Leopoldo",
              href: '/stories/quando-camillo-incontra-leopoldo'
            }
          ]
        }
      ]
    },
    {
      id: 'books',
      labelKey: 'nav.books',
      items: []
    },
    {
      id: 'blogPosts',
      labelKey: 'nav.blogPosts',
      items: [
        {
          id: 'caccheidi',
          title: "Le Caccheidi",
          href: '/blog/caccheidi'
        },
        {
          id: 're-dei-cagacazzi',
          title: "Il re dei cagacazzi",
          href: '/blog/re-dei-cagacazzi'
        },
        {
          id: 'jazz-club',
          title: "Il Jazz club",
          href: '/blog/jazz-club'
        },
        {
          id: 'guerra-mondi-notte-berlino',
          title: "La guerra dei mondi nella notte di Berlino",
          href: '/blog/guerra-mondi-notte-berlino'
        },
        {
          id: 'berlino-raccolta-vetro',
          title: "Berlino e la raccolta del vetro",
          href: '/blog/berlino-raccolta-vetro'
        },
        {
          id: 'tedeschi-non-dicono-mangiano',
          title: "Quello che i tedeschi non dicono, ma mangiano",
          href: '/blog/tedeschi-non-dicono-mangiano'
        },
        {
          id: 'comune-berlino',
          title: "La comune di Berlino",
          href: '/blog/comune-berlino'
        },
        {
          id: '10-tips-soon-to-be-dads',
          title: "10 Tips for Soon-to-Be Dads",
          href: '/blog/10-tips-soon-to-be-dads'
        },
        {
          id: 'diario-cattivo-studente-tedesco',
          title: "Diario di un cattivo studente di tedesco",
          href: '/blog/diario-cattivo-studente-tedesco'
        }
      ]
    }
  ];
</script>

<aside class="w-64 h-screen bg-gray-100 sketched-border overflow-y-auto pencil-line">
  <div class="px-6 pb-8 rule-inset">
    <nav class="space-y-8">
      {#each sections as section}
        <div>
          <h2 class="text-lg font-bold px-4 on-rule rule-gap">
            {$t(section.labelKey)}
          </h2>
          
          {#if section.subsections && section.subsections.length > 0}
            <!-- Render subsections -->
            {#each section.subsections as subsection}
              <div class="rule-gap">
                {#if subsection.id !== 'other-stories'}
                  <h3 class="text-md font-semibold px-4 text-gray-700 on-rule">
                    {$t(subsection.labelKey)}
                  </h3>
                {/if}
                <ul class="menu-list">
                  {#each subsection.items as item}
                    <li>
                      <a
                        href={item.href}
                        class="menu-item block"
                        class:pl-8={subsection.id === 'leopoldo'}
                        class:active={$page.url.pathname === item.href}
                      >
                        {item.title}
                      </a>
                    </li>
                  {/each}
                </ul>
              </div>
            {/each}
          {:else if section.items.length === 0}
            <div class="px-4 text-sm text-gray-600 italic on-rule">
              Coming soon...
            </div>
          {:else}
            <ul class="menu-list">
              {#each section.items as item}
                <li>
                  <a
                    href={item.href}
                    class="menu-item block"
                    class:active={$page.url.pathname === item.href}
                  >
                    {item.title}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </nav>
  </div>
</aside>
