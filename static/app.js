/* ==================================== APP ================================= */

const app = Vue.createApp({
    data() {
        return { products: productsData, currentYear: new Date().getFullYear() };
    },
    computed: {
        sortedProducts() {
            return [...this.products].sort((a, b) => {
                if (a.isAvailable !== b.isAvailable) return a.isAvailable ? -1 : 1;
                return a.id - b.id;
            });
        },
    },
});
app.mount("#app");
