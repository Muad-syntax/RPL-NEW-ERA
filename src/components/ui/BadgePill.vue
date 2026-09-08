<template>
  <span class="badge-pill" :class="`badge-${color}`">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: 'gold',
    validator: (v) => ['gold', 'silver', 'teal', 'blue', 'green', 'crimson'].includes(v),
  },
})
</script>

<style scoped>
.badge-pill {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
}

.badge-gold {
  background: linear-gradient(135deg, #FFD700, #FFB800);
  color: #1A1832;
}
.badge-silver {
  background: linear-gradient(135deg, #C0C0C0, #A0A0A0);
  color: #1A1832;
}
.badge-teal {
  background: linear-gradient(135deg, #00C9A7, #009B7D);
  color: #fff;
}
.badge-blue {
  background: linear-gradient(135deg, #4F8EF7, #2563EB);
  color: #fff;
}
.badge-green {
  background: linear-gradient(135deg, #6EE7B7, #10B981);
  color: #1A1832;
}
.badge-crimson {
  background: linear-gradient(135deg, #F87171, #E63030);
  color: #fff;
}
</style>
