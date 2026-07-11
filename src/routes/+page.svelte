<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<div class="max-w-4xl mx-auto">
  <div class="sketched-border bg-white p-8 mb-6">
    <h1 class="text-5xl font-bold handwritten mb-4">
      Welcome to My Stories
    </h1>
    <p class="text-xl leading-relaxed">
      A collection of stories, shorts, and blog posts written with passion and imagination.
    </p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="sketched-border bg-white p-6 hover:bg-gray-50 transition-all">
      <h2 class="text-2xl font-bold handwritten mb-3">
        📖 {$t('nav.stories')}
      </h2>
      <p>
        Long-form narratives and adventures that take you on a journey.
      </p>
    </div>
    
    <div class="sketched-border bg-white p-6 hover:bg-gray-50 transition-all">
      <h2 class="text-2xl font-bold handwritten mb-3">
        ✨ {$t('nav.shorts')}
      </h2>
      <p>
        Quick reads and bite-sized tales for when you're short on time.
      </p>
    </div>
    
    <div class="sketched-border bg-white p-6 hover:bg-gray-50 transition-all">
      <h2 class="text-2xl font-bold handwritten mb-3">
        💭 {$t('nav.blogPosts')}
      </h2>
      <p>
        Thoughts, reflections, and musings on writing and life.
      </p>
    </div>
  </div>
</div>
