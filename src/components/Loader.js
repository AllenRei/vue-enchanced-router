export const Loader = {
  template: `
    <div>
        <component :is="spinner" v-if="loading"></component>
        <component :is="target" v-else></component>
        <component :is="errorComponent" v-if="error"></component>
    </div>
    `,
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
    },
    promises: {
      type: Array,
    },
    spinner: {
      type: Object,
    },
    errorComponent: {
      type: Object,
    }
  }
}