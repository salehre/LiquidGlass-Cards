import type { CardVisualConfig } from './generateFrameworkCode'
import type { CardFrameworkCode } from '../types'

/** 'aurora-gel-card' -> 'AuroraGelCard' */
function pascalCase(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

function filterComment(cfg: CardVisualConfig): string {
  if (cfg.sharedFilter) {
    return `// This card uses the shared #${cfg.filterId} filter, rendered once\n// near the root of _app.tsx / layout.tsx (see FiltersDefs below).\n`
  }
  return `// This card ships its own #${cfg.filterId} filter (different\n// baseFrequency/scale than the other cards), so the <svg><defs><filter>\n// block travels with the component instead of living in a shared layout.\n`
}

function filterJsx(cfg: CardVisualConfig, indent = '      '): string {
  if (cfg.sharedFilter) return ''
  return `<svg width="0" height="0" style={{ position: 'absolute' }}>
${indent}<defs>
${indent}  <filter id="${cfg.filterId}" x="0%" y="0%" width="100%" height="100%">
${indent}    <feTurbulence type="fractalNoise" baseFrequency="${cfg.baseFrequency} ${cfg.baseFrequency}" numOctaves={2} seed={92} result="noise" />
${indent}    <feGaussianBlur in="noise" stdDeviation={2} result="blurred" />
${indent}    <feDisplacementMap in="SourceGraphic" in2="blurred" scale={${cfg.scale}} xChannelSelector="R" yChannelSelector="G" />
${indent}  </filter>
${indent}</defs>
${indent}</svg>\n`
}

function generateReactTailwind(cfg: CardVisualConfig): string {
  const name = pascalCase(cfg.slug)
  const radius = cfg.borderRadius ?? 28
  return `${filterComment(cfg)}export default function ${name}() {
  return (
    <>
      ${filterJsx(cfg)}
      <div className="${cfg.slug} relative w-full max-w-[400px] h-[300px] rounded-[${radius}px] isolate cursor-pointer">
        <div
          className="relative z-10 flex h-full w-full flex-col justify-between p-6 text-white"
          style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 bg-white/10">
                {/* user icon */}
              </div>
              <div className="flex flex-col">
                <p className="m-0 font-semibold">Jane Doe</p>
                <p className="m-0 text-xs opacity-70">UX Designer</p>
              </div>
            </div>
            {/* bell icon, opacity-50 */}
          </div>

          <div className="mt-2 text-center">
            <h3 className="m-0 mb-1 text-lg font-bold">Styled Component</h3>
            <p className="m-0 mb-4 text-sm opacity-70">This is a sample of how your content might look inside.</p>
            <button className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-semibold text-white shadow backdrop-blur-[8px] transition-all hover:bg-white/20">
              Get Started
            </button>
          </div>

          <p className="mt-4 text-center text-xs" style={{ color: '#e0e6ed' }}>
            Tip: Try adjusting the sliders and colors to see real-time changes!
          </p>
        </div>
      </div>

      <style jsx>{\`
        .${cfg.slug} { box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3); }
        .${cfg.slug}::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: ${radius}px;
          box-shadow: inset ${cfg.insetShadow} rgba(255, 255, 255, 0.7);
          pointer-events: none;
        }
        .${cfg.slug}::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: ${radius}px;
          backdrop-filter: blur(${cfg.blur}px);
          -webkit-backdrop-filter: blur(${cfg.blur}px);
          filter: url(#${cfg.filterId});
          -webkit-filter: url(#${cfg.filterId});
          isolation: isolate;
          pointer-events: none;
        }
      \`}</style>
    </>
  )
}`
}

function generateReactBootstrap(cfg: CardVisualConfig): string {
  const name = pascalCase(cfg.slug)
  return `${filterComment(cfg)}export default function ${name}() {
  return (
    <>
      ${filterJsx(cfg)}
      <div className="${cfg.slug} position-relative rounded-4 mx-auto" style={{ width: 400, maxWidth: '100%', height: 300 }}>
        <div
          className="position-relative d-flex h-100 w-100 flex-column justify-content-between p-4 text-white"
          style={{ zIndex: 10, textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
        >
          <div className="d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-center gap-3">
              <div className="avatar d-flex align-items-center justify-content-center rounded-circle">
                {/* user icon */}
              </div>
              <div className="d-flex flex-column">
                <p className="mb-0 fw-semibold">Jane Doe</p>
                <p className="mb-0 small opacity-75">UX Designer</p>
              </div>
            </div>
            {/* bell icon, opacity-50 */}
          </div>

          <div className="text-center mt-2">
            <h3 className="fs-6 fw-bold mb-1">Styled Component</h3>
            <p className="small opacity-75 mb-3">This is a sample of how your content might look inside.</p>
            <button className="btn glass-button w-100">Get Started</button>
          </div>

          <p className="text-center small mb-0 mt-3" style={{ color: '#e0e6ed' }}>
            Tip: Try adjusting the sliders and colors to see real-time changes!
          </p>
        </div>
      </div>

      <style jsx>{\`
        .${cfg.slug} { isolation: isolate; box-shadow: 0px 0px 21px -8px rgba(255, 255, 255, 0.3); }
        .${cfg.slug}::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: inherit;
          box-shadow: inset ${cfg.insetShadow} rgba(255, 255, 255, 0.7);
          pointer-events: none;
        }
        .${cfg.slug}::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          backdrop-filter: blur(${cfg.blur}px);
          -webkit-backdrop-filter: blur(${cfg.blur}px);
          filter: url(#${cfg.filterId});
          -webkit-filter: url(#${cfg.filterId});
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
      \`}</style>
    </>
  )
}`
}

/** Vuetify has no direct React port, so this targets MUI (Material UI) — the
 *  closest Material Design equivalent in the React ecosystem. */
function generateReactMUI(cfg: CardVisualConfig): string {
  const name = pascalCase(cfg.slug)
  const radius = cfg.borderRadius ?? 28
  return `${filterComment(cfg)}import { Avatar, Box, Button, Card, IconButton, Typography } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

export default function ${name}() {
  return (
    <>
      ${filterJsx(cfg)}
      <Card
        elevation={0}
        sx={{
          position: 'relative',
          width: 400,
          maxWidth: '100%',
          height: 300,
          borderRadius: '${radius}px',
          isolation: 'isolate',
          cursor: 'pointer',
          background: 'transparent',
          boxShadow: '0px 0px 21px -8px rgba(255, 255, 255, 0.3)',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            borderRadius: 'inherit',
            boxShadow: 'inset ${cfg.insetShadow} rgba(255, 255, 255, 0.7)',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            borderRadius: 'inherit',
            backdropFilter: 'blur(${cfg.blur}px)',
            WebkitBackdropFilter: 'blur(${cfg.blur}px)',
            filter: 'url(#${cfg.filterId})',
            WebkitFilter: 'url(#${cfg.filterId})',
            isolation: 'isolate',
            pointerEvents: 'none',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            p: 3,
            color: '#fff',
            textShadow: '0 1px 3px rgba(0,0,0,0.2)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Avatar sx={{ width: 40, height: 40, bgcolor: 'rgba(255,255,255,0.1)', border: '2px solid #3b82f6' }}>
                <PersonOutlineIcon sx={{ color: '#3b82f6', fontSize: 20 }} />
              </Avatar>
              <Box>
                <Typography variant="body2" fontWeight={600} color="#fff" mb={0}>Jane Doe</Typography>
                <Typography variant="caption" color="#fff" sx={{ opacity: 0.7 }}>UX Designer</Typography>
              </Box>
            </Box>
            <IconButton size="small" sx={{ opacity: 0.5, color: '#fff' }}>
              <NotificationsNoneIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" fontWeight={700} color="#fff" mb={0.5}>Styled Component</Typography>
            <Typography variant="body2" color="#fff" sx={{ opacity: 0.7, mb: 2 }}>
              This is a sample of how your content might look inside.
            </Typography>
            <Button
              fullWidth
              variant="text"
              sx={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                fontWeight: 600,
                backdropFilter: 'blur(8px)',
                '&:hover': { background: 'rgba(255,255,255,0.2)' },
              }}
            >
              Get Started
            </Button>
          </Box>

          <Typography sx={{ textAlign: 'center', fontSize: 12, color: '#e0e6ed', mb: 0 }}>
            Tip: Try adjusting the sliders and colors to see real-time changes!
          </Typography>
        </Box>
      </Card>
    </>
  )
}`
}

/** Builds the full `{ tailwind, bootstrap, vuetify }` React/JSX snippet set for one card.
 *  The 'vuetify' key is kept so it lines up with the Vue CardFrameworkCode shape —
 *  its content is the MUI version (see generateReactMUI above). */
export function generateAllReactFrameworks(cfg: CardVisualConfig): CardFrameworkCode {
  return {
    tailwind: generateReactTailwind(cfg),
    bootstrap: generateReactBootstrap(cfg),
    vuetify: generateReactMUI(cfg),
  }
}
