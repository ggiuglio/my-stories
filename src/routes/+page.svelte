<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<div class="max-w-4xl mx-auto">
  <div class="sketched-border px-8 pb-8 mb-8 rule-inset">
    <h1 class="text-5xl font-bold handwritten mb-4">
      {$t('home.welcome')}
    </h1>
    <p class="text-xl on-rule">
      {$t('home.intro')}
    </p>
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
