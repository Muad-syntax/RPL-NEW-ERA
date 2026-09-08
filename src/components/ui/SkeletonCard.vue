<template>
  <div class="skeleton-card" :class="{ circle }">
    <div class="skeleton-shimmer" />
  </div>
</template>

<script setup>
defineProps({
  circle: { type: Boolean, default: false },
  width: { type: String, default: '100%' },
  height: { type: String, default: '200px' },
})
</script>

<style scoped>
.skeleton-card {
  background: rgba(45, 42, 110, 0.5);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  width: v-bind(width);
  height: v-bind(height);
}

.skeleton-card.circle {
  border-radius: 50%;
}

.skeleton-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 184, 0, 0.08) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
}

@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}
</style>
