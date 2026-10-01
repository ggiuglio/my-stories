<script lang="ts">
  import TranslationNote from '$lib/components/TranslationNote.svelte';
  const title = "Leopoldo's Tail";
  // const image = "/img/leopoldo.png"; // Uncomment when image is available
</script>

<div class="max-w-4xl mx-auto">
  <div class="sketched-border px-8 pb-8 rule-inset">
    <h1 class="text-4xl font-bold handwritten ruled-title">
      {title} <TranslationNote lang="en" />
    </h1>
    
    <!-- Uncomment when image is available
    <div class="ruled-figure">
      <img 
        src={image} 
        alt={title}
        class="sketched-border"
      />
    </div>
    -->
    
    <div class="prose prose-lg max-w-none prose-ruled">
      <p class="text-lg leading-relaxed">
        When Leopoldo was little, he didn't have a curly tail like most pigs; instead he had a lovely little tail, straight and smooth. When he was awake, his tail stood straight up (and every now and then it pointed at something particularly tasty-looking to eat), but as soon as he fell asleep it flopped to the ground like a piece of string.
      </p>
      
      <p class="text-lg leading-relaxed">
        At Camillo's house, Leopoldo had lots of secret places to hide for a nap (when you're invisible, sleeping on the sofa is not a good idea: you run the risk of someone sitting on you right in the middle of a dream), but his favourite spot was, without a doubt, the tumble dryer.
      </p>
      
      <p class="text-lg leading-relaxed">
        The tumble dryer has a nice round drum, with just the right curve for a piglet's back; it's always warm and dry, and it often has that lovely smell of clean laundry that lulls you to sleep like a freshly made bed.
      </p>
      
      <p class="text-lg leading-relaxed">
        All was well until one day Camillo's mum decided to dry the laundry after lunch, just as Leopoldo was snoring away happily inside the machine.
      </p>
      
      <p class="text-lg leading-relaxed">
        There wasn't much laundry to dry, only the clothes of Camillo's little sister, so his mum didn't notice that the dryer was already full. And she certainly couldn't see Leopoldo's invisible tail hanging out of the door!
      </p>
      
      <p class="text-lg leading-relaxed">
        So Mum loaded the machine, shut the door and switched it on.
      </p>
      
      <p class="text-lg leading-relaxed">
        Poor Leopoldo woke with a start, with the whole world spinning around him and his tail stuck in the door. He tried shouting for someone to let him out, but Camillo's mum had gone into the other room to make a phone call.
      </p>
      
      <p class="text-lg leading-relaxed">
        And so, an hour and a half later, when the drying was done, out of the machine came a little pig who smelled of clean laundry but walked crooked like a sailor, and whose little tail was curled up like a spring.
      </p>
    </div>
  </div>
</div>
