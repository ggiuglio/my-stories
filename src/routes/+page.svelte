<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<div class="max-w-4xl mx-auto">
  <div class="sketched-border px-8 pb-8 mb-8 rule-inset">
    <h1 class="text-5xl font-bold handwritten mb-6 text-center">
      {$t('home.welcome')}
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
      <img src="/img/serio.jpg" alt="Serio" class="w-full h-56 object-cover sketched-border" />
      <img src="/img/tra_serio_e_aceto.jpg" alt="Tra il serio e l'aceto" class="w-full h-56 object-cover sketched-border" />
      <img src="/img/aceto.jpeg" alt="Aceto" class="w-full h-56 object-cover sketched-border" />
    </div>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="sketched-border px-6 pb-6 rule-inset hover:bg-gray-50 transition-all">
      <h2 class="text-2xl font-bold handwritten rule-gap">
        📖 {$t('nav.stories')}
      </h2>
      <p class="on-rule">
        {$t('home.storiesDescription')}
      </p>
    </div>
    
    <div class="sketched-border px-6 pb-6 rule-inset hover:bg-gray-50 transition-all">
      <h2 class="text-2xl font-bold handwritten rule-gap">
        ✨ {$t('nav.books')}
      </h2>
      <p class="on-rule">
        {$t('home.booksDescription')}
      </p>
    </div>
    
    <div class="sketched-border px-6 pb-6 rule-inset hover:bg-gray-50 transition-all">
      <h2 class="text-2xl font-bold handwritten rule-gap">
        💭 {$t('nav.blogPosts')}
      </h2>
      <p class="on-rule">
        {$t('home.blogPostsDescription')}
      </p>
    </div>
  </div>
</div>
