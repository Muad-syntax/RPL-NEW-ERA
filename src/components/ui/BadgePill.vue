<template>
  <span class="badge-pill" :class="`badge-${color}`">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'sky', 'ice', 'dark', 'gold', 'silver', 'teal', 'blue', 'green', 'crimson'].includes(v),
  },
})
</script>

<style scoped>
.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  line-height: 1.4;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
}

/* Primary / Electric Blue */
.badge-primary,
.badge-blue,
.badge-gold {
  background: linear-gradient(135deg, #2196F3 0%, #1565C0 100%);
  color: #FFFFFF;
  border: 1px solid rgba(144, 202, 249, 0.4);
  box-shadow: 0 2px 10px rgba(33, 150, 243, 0.35);
}

/* Sky / Pastel Blue */
.badge-sky,
.badge-silver {
  background: rgba(144, 202, 249, 0.15);
  color: #90CAF9;
  border: 1px solid rgba(144, 202, 249, 0.35);
}

/* Ice Blue */
.badge-ice {
  background: #E3F2FD;
  color: #0D47A1;
  border: 1px solid #90CAF9;
}

/* Deep Sapphire Dark */
.badge-dark {
  background: rgba(13, 71, 161, 0.4);
  color: #E3F2FD;
  border: 1px solid rgba(33, 150, 243, 0.3);
}

.badge-teal {
  background: rgba(0, 201, 167, 0.15);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.3);
}

.badge-green {
  background: rgba(16, 185, 129, 0.15);
  color: #6ee7b7;
  border: 1px solid rgba(110, 231, 183, 0.3);
}

.badge-crimson {
  background: rgba(239, 68, 68, 0.15);
  color: #fca5a5;
  border: 1px solid rgba(252, 165, 165, 0.3);
}
</style>
