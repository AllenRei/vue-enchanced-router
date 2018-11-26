export const Loader = {
  template: `
    <div>
        <component :is="spinner" v-if="loading"></component>
        <transition :name="transition || ''">
          <component :is="target" v-if="!loading"></component>
        </transition>
        <component :is="errorComponent" :error="errorMessage" v-if="error"></component>
    </div>
    `,
  name: 'loader',
  data() {
    return {
      loading: true,
      error: false,
      errorMessage: false
    };
  },
  created() {
    Promise.all(this.promises.map(p => p()))
      .then(() => (this.loading = false))
      .catch(e => {
        this.error = true
        this.errorMessage = e;
      });
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
    },
    transition: {
      type: String
    }
  }
}