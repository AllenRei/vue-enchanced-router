<template>
    <div>
        <component :is="spinner" v-if="loading"></component>
        <component :is="target" v-else></component>
        <component :is="error" v-if="error"></component>
    </div>
</template>
<script>
export default {
  name: 'loader',
  data() {
    return {
      loading: true,
      error: false
    };
  },
  created() {
    Promise.all(this.promises.map(p => p()))
      .then(() => (this.loading = false))
      .catch(() => (this.error = true));
  },
  props: {
    target: {
      type: Object,
      required: true
    },
    promises: {
      type: Array,
      required: true
    },
    spinner: {
      type: Object,
      required: true
    },
    error: {
      type: Object,
      required: true
    }
  }
};
</script>