import hello from '../../src/ui/hello.vue';

export default ( { Vue } ) => {
    Vue.component( 'e-hello', hello );

    Vue.mixin( {
        methods: {
            stampDynamicCode() {
                if ( !this.$el?.querySelector ) {
                    return;
                }

                const pre = this.$el.querySelector( 'pre.language-vue:not([data-stamped-dynamic-code])' );
                if ( !pre) {
                    return;
                }

                const el = document.createElement( 'div' );

                pre.dataset.stampedDynamicCode = '1';
                pre.parentElement.insertAdjacentElement( 'afterend', el );

                new Vue( { template: '<div class="preview">' + pre.innerText + '</div>' } ).$mount( el );
            },
        },

        mounted() {
            this.stampDynamicCode();
        },

        updated() {
            this.stampDynamicCode();
        },
    } );
};
