<script lang="ts">
  import { page } from '$app/stores';
  import { t } from '$lib/i18n';
  
  interface MenuItem {
    id: string;
    labelKey: string;
    items: { id: string; title: string; href: string }[];
  }
  
  const sections: MenuItem[] = [
    {
      id: 'stories',
      labelKey: 'nav.stories',
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
        }
      ]
    },
    {
      id: 'shorts',
      labelKey: 'nav.shorts',
      items: []
    },
    {
      id: 'blogPosts',
      labelKey: 'nav.blogPosts',
      items: []
    }
  ];
</script>

<aside class="w-64 h-screen bg-gray-100 sketched-border overflow-y-auto pencil-line">
  <div class="p-6">
    <nav class="space-y-6">
      {#each sections as section}
        <div>
          <h2 class="text-lg font-bold mb-2 px-4">
            {$t(section.labelKey)}
          </h2>
          
          {#if section.items.length === 0}
            <div class="px-4 py-2 text-sm text-gray-600 italic">
              Coming soon...
            </div>
          {:else}
            <ul class="space-y-1">
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
