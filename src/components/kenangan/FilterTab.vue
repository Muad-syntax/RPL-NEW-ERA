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
  gap: 10px;
  justify-content: center;
  margin-bottom: 36px;
}

.filter-btn {
  padding: 8px 22px;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(144, 202, 249, 0.2);
  background: rgba(13, 26, 56, 0.5);
  color: var(--color-text-muted);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}

.filter-btn:hover {
  border-color: rgba(33, 150, 243, 0.5);
  color: #FFFFFF;
  background: rgba(33, 150, 243, 0.12);
  transform: translateY(-1px);
}

.filter-btn.active {
  background: var(--gradient-primary);
  color: #FFFFFF;
  border-color: rgba(144, 202, 249, 0.4);
  font-weight: 600;
  box-shadow: 0 4px 18px rgba(33, 150, 243, 0.35);
}
</style>
