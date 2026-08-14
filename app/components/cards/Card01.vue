<script setup lang="ts">
// Frosted Light — the first real translation. Sample content mirrors the
// reference: avatar + name/role, bell icon, title, description, button, tip.
</script>

<template>
  <div class="w-full max-w-xs rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-xl">
    <div class="flex items-start justify-between">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <svg class="h-5 w-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
        </div>
        <div>
          <p class="text-sm font-bold text-white">Jane Doe</p>
          <p class="text-xs text-white/50">UX Designer</p>
        </div>
      </div>
      <svg class="h-5 w-5 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
        <path d="M10 20a2 2 0 0 0 4 0" />
      </svg>
    </div>

    <div class="mt-9 text-center">
      <h3 class="text-base font-bold text-white">Styled Component</h3>
      <p class="mt-2 text-sm leading-relaxed text-white/60">
        This is a sample of how your content might look inside.
      </p>
    </div>

    <button class="mt-6 w-full rounded-xl border border-white/15 bg-white/10 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20">
      Get Started
    </button>

    <p class="mt-6 text-center text-[11px] leading-relaxed text-white/40">
      Tip: Try adjusting the sliders and colors to see real-time changes!
    </p>
  </div>
</template>
