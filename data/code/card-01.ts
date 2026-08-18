import type { CardFrameworkCode } from '../types'

/** Frosted Light — the first fully translated card. */
export const card01Code: CardFrameworkCode = {
  tailwind: `<div class="w-full max-w-xs rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-xl">
  <div class="flex items-start justify-between">
    <div class="flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
        <!-- user icon -->
      </div>
      <div>
        <p class="text-sm font-bold text-white">Jane Doe</p>
        <p class="text-xs text-white/50">UX Designer</p>
      </div>
    </div>
    <!-- bell icon -->
  </div>

  <div class="mt-9 text-center">
    <h3 class="text-base font-bold text-white">Styled Component</h3>
    <p class="mt-2 text-sm text-white/60">This is a sample of how your content might look inside.</p>
  </div>

  <button class="mt-6 w-full rounded-xl border border-white/15 bg-white/10 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20">
    Get Started
  </button>

  <p class="mt-6 text-center text-[11px] text-white/40">
    Tip: Try adjusting the sliders and colors to see real-time changes!
  </p>
</div>`,
  bootstrap: `<!-- Bootstrap has no backdrop-blur utility, so the frosted-glass surface
     itself is a small custom class layered on top of Bootstrap's own
     grid/utility classes (d-flex, rounded, text-white-50, ...). -->
<div class="card frosted-card border-0 text-white p-4">
  <div class="d-flex justify-content-between align-items-start">
    <div class="d-flex align-items-center gap-3">
      <div class="avatar-ring d-flex align-items-center justify-content-center rounded-circle">
        <!-- user icon -->
      </div>
      <div>
        <p class="mb-0 fw-bold small">Jane Doe</p>
        <p class="mb-0 text-white-50 small">UX Designer</p>
      </div>
    </div>
    <!-- bell icon -->
  </div>

  <div class="text-center mt-5">
    <h3 class="fs-6 fw-bold mb-0">Styled Component</h3>
    <p class="small text-white-50 mt-2 mb-0">
      This is a sample of how your content might look inside.
    </p>
  </div>

  <button class="btn btn-glass w-100 mt-4">Get Started</button>

  <p class="text-center text-white-50 mt-4 mb-0" style="font-size: 11px;">
    Tip: Try adjusting the sliders and colors to see real-time changes!
  </p>
</div>

<style>
.frosted-card {
  max-width: 20rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}
.avatar-ring {
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
}
.btn-glass {
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 0.75rem;
  padding: 0.6rem;
  font-weight: 600;
  font-size: 0.875rem;
}
.btn-glass:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
</style>`,
  vuetify: `<!-- Vuetify supplies the components (v-card, v-avatar, v-icon, v-btn);
     the frosted-glass surface is still custom CSS layered on top. -->
<v-card class="frosted-card pa-6" rounded="xl" elevation="0" max-width="320">
  <div class="d-flex justify-space-between align-start">
    <div class="d-flex align-center" style="gap: 12px;">
      <v-avatar size="40" class="avatar-ring">
        <v-icon icon="mdi-account-outline" color="white" size="20" />
      </v-avatar>
      <div>
        <p class="text-body-2 font-weight-bold text-white mb-0">Jane Doe</p>
        <p class="text-caption text-white text-opacity-50 mb-0">UX Designer</p>
      </div>
    </div>
    <v-icon icon="mdi-bell-outline" color="white" size="20" style="opacity: .5" />
  </div>

  <div class="text-center mt-8">
    <h3 class="text-subtitle-1 font-weight-bold text-white mb-0">Styled Component</h3>
    <p class="text-body-2 text-white text-opacity-60 mt-2 mb-0">
      This is a sample of how your content might look inside.
    </p>
  </div>

  <v-btn block variant="outlined" color="white" class="mt-6 glass-btn">
    Get Started
  </v-btn>

  <p class="text-center text-white text-opacity-40 mt-6 mb-0" style="font-size: 11px;">
    Tip: Try adjusting the sliders and colors to see real-time changes!
  </p>
</v-card>

<style>
.frosted-card {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.avatar-ring {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
}
.glass-btn {
  border-color: rgba(255, 255, 255, 0.15) !important;
  background: rgba(255, 255, 255, 0.1) !important;
}
</style>`,
}
