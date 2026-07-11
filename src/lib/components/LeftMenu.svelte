<script lang="ts">
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
      items: []
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
  
  let currentPath = '';
  
  if (typeof window !== 'undefined') {
    currentPath = window.location.pathname;
  }
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
                    class:active={currentPath === item.href}
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
