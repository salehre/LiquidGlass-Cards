import type { CardFrameworkCode } from '../types'

/**
 * Liquid Crystal — glass card whose frosted look comes from an SVG
 * feTurbulence/feDisplacementMap filter (#glass-distortion), not a plain
 * backdrop-blur. The filter itself is defined once, globally (see app.vue),
 * and referenced here via `filter: url(#glass-distortion)`.
 */
export const card01Code: CardFrameworkCode = {
  tailwind: `<!-- #glass-distortion SVG filter is defined once, globally — see the
     <svg><defs><filter> block included in the app shell. Tailwind has no
     utility for that kind of filter, so the distortion + inset-shadow
     layers stay hand-written CSS; everything else below is Tailwind. -->
<div class="liquid-glass-card relative w-full max-w-[400px] h-[300px] rounded-[28px] isolate cursor-pointer">
  <div class="relative z-10 flex h-full w-full flex-col justify-between p-6 text-white" style="text-shadow: 0 1px 3px rgba(0,0,0,0.2);">
    <div class="flex items-start justify-between">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-white/10">
          <!-- user icon, text-blue-500 -->
        </div>
        <div class="flex flex-col">
          <p class="m-0 font-semibold">Jane Doe</p>
          <p class="m-0 text-xs opacity-70">UX Designer</p>
        </div>
      </div>
      <!-- bell icon, opacity-50 -->
    </div>

    <div class="mt-2 text-center">
      <h3 class="m-0 mb-1 text-lg font-bold">Styled Component</h3>
      <p class="m-0 mb-4 text-sm opacity-70">This is a sample of how your content might look inside.</p>
      <button class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-semibold text-white shadow backdrop-blur-[8px] transition-all hover:bg-white/20">
        Get Started
      </button>
    </div>

    <p class="mt-4 text-center text-xs" style="color: #e0e6ed;">
      Tip: Try adjusting the sliders and colors to see real-time changes!
    </p>
  </div>
</div>

<style>
.liquid-glass-card { box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3); }
.liquid-glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: 28px;
  box-shadow: inset 0 0 5px -8px rgba(255, 255, 255, 0.7);
  pointer-events: none;
}
.liquid-glass-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 28px;
  filter: url(#glass-distortion);
  -webkit-filter: url(#glass-distortion);
  isolation: isolate;
  pointer-events: none;
}
</style>`,
  bootstrap: `<!-- #glass-distortion SVG filter is defined once, globally — see the
     <svg><defs><filter> block included in the app shell. -->
<div class="liquid-glass-card position-relative rounded-4 mx-auto" style="width: 400px; max-width: 100%; height: 300px;">
  <div class="position-relative d-flex h-100 w-100 flex-column justify-content-between p-4 text-white" style="z-index: 10; text-shadow: 0 1px 3px rgba(0,0,0,0.2);">
    <div class="d-flex justify-content-between align-items-start">
      <div class="d-flex align-items-center gap-3">
        <div class="avatar d-flex align-items-center justify-content-center rounded-circle">
          <!-- user icon -->
        </div>
        <div class="d-flex flex-column">
          <p class="mb-0 fw-semibold">Jane Doe</p>
          <p class="mb-0 small opacity-75">UX Designer</p>
        </div>
      </div>
      <!-- bell icon, opacity-50 -->
    </div>

    <div class="text-center mt-2">
      <h3 class="fs-6 fw-bold mb-1">Styled Component</h3>
      <p class="small opacity-75 mb-3">This is a sample of how your content might look inside.</p>
      <button class="btn glass-button w-100">Get Started</button>
    </div>

    <p class="text-center small mb-0 mt-3" style="color: #e0e6ed;">
      Tip: Try adjusting the sliders and colors to see real-time changes!
    </p>
  </div>
</div>

<style>
.liquid-glass-card { isolation: isolate; box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3); }
.liquid-glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 5px -8px rgba(255, 255, 255, 0.7);
  pointer-events: none;
}
.liquid-glass-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  filter: url(#glass-distortion);
  -webkit-filter: url(#glass-distortion);
  isolation: isolate;
  pointer-events: none;
}
.avatar {
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #3b82f6;
}
.glass-button {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  border-radius: 0.5rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.glass-button:hover { background: rgba(255, 255, 255, 0.2); color: #fff; }
.glass-button:focus { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4); }
</style>`,
  vuetify: `<!-- #glass-distortion SVG filter is defined once, globally — see the
     <svg><defs><filter> block included in the app shell. -->
<v-card class="liquid-glass-card pa-6" rounded="xl" elevation="0" width="400" height="300" style="max-width: 100%;">
  <div class="d-flex flex-column justify-space-between h-100" style="position: relative; z-index: 10; text-shadow: 0 1px 3px rgba(0,0,0,0.2);">
    <div class="d-flex justify-space-between align-start">
      <div class="d-flex align-center" style="gap: 12px;">
        <v-avatar size="40" class="avatar-ring">
          <v-icon icon="mdi-account-outline" color="#3b82f6" size="20" />
        </v-avatar>
        <div>
          <p class="text-body-2 font-weight-medium text-white mb-0">Jane Doe</p>
          <p class="text-caption text-white text-opacity-70 mb-0">UX Designer</p>
        </div>
      </div>
      <v-icon icon="mdi-bell-outline" color="white" size="20" style="opacity: .5" />
    </div>

    <div class="text-center">
      <h3 class="text-subtitle-1 font-weight-bold text-white mb-1">Styled Component</h3>
      <p class="text-body-2 text-white text-opacity-70 mb-4">
        This is a sample of how your content might look inside.
      </p>
      <v-btn block variant="tonal" color="white" class="glass-btn">Get Started</v-btn>
    </div>

    <p class="text-center mb-0" style="font-size: 12px; color: #e0e6ed;">
      Tip: Try adjusting the sliders and colors to see real-time changes!
    </p>
  </div>
</v-card>

<style>
.liquid-glass-card { isolation: isolate; box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3) !important; background: transparent !important; }
.liquid-glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 5px -8px rgba(255, 255, 255, 0.7);
  pointer-events: none;
}
.liquid-glass-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  filter: url(#glass-distortion);
  -webkit-filter: url(#glass-distortion);
  isolation: isolate;
  pointer-events: none;
}
.avatar-ring { border: 2px solid #3b82f6; background: rgba(255, 255, 255, 0.1); }
.glass-btn {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
</style>`,
}