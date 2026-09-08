<template>
  <div class="filter-tabs" role="tablist" aria-label="Filter kategori foto">
    <button
      v-for="cat in categories"
      :key="cat"
      class="filter-btn"
      :class="{ active: modelValue === cat }"
      @click="$emit('update:modelValue', cat)"
      role="tab"
      :aria-selected="modelValue === cat"
    >
      {{ cat }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: { type: Array, required: true },
  modelValue: { type: String, required: true },
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 32px;
}

.filter-btn {
  padding: 8px 20px;
  border-radius: 20px;
  border: 1.5px solid rgba(255, 184, 0, 0.2);
  background: transparent;
  color: rgba(255, 249, 230, 0.65);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  border-color: rgba(255, 184, 0, 0.5);
  color: var(--color-solar-gold);
  background: rgba(255, 184, 0, 0.07);
}

.filter-btn.active {
  background: var(--gradient-gold);
  color: var(--color-deep-navy);
  border-color: transparent;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(255, 184, 0, 0.3);
}
</style>
