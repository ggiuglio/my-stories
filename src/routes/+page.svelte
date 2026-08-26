<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<div class="max-w-4xl mx-auto">
  <div class="sketched-border bg-white p-8 mb-6">
    <h1 class="text-5xl font-bold handwritten mb-4">
      {$t('home.welcome')}
    </h1>
    <p class="text-xl leading-relaxed">
      {$t('home.intro')}
    </p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="sketched-border bg-white p-6 hover:bg-gray-50 transition-all">
      <h2 class="text-2xl font-bold handwritten mb-3">
        📖 {$t('nav.stories')}
      </h2>
      <p>
        {$t('home.storiesDescription')}
      </p>
    </div>
    
    <div class="sketched-border bg-white p-6 hover:bg-gray-50 transition-all">
      <h2 class="text-2xl font-bold handwritten mb-3">
        ✨ {$t('nav.books')}
      </h2>
      <p>
        {$t('home.booksDescription')}
      </p>
    </div>
    
    <div class="sketched-border bg-white p-6 hover:bg-gray-50 transition-all">
      <h2 class="text-2xl font-bold handwritten mb-3">
        💭 {$t('nav.blogPosts')}
      </h2>
      <p>
        {$t('home.blogPostsDescription')}
      </p>
    </div>
  </div>
</div>
