<template>
    <div class="content">
        <div class="content__inner">
            <v-select @selected="(e) => selecting(e)"></v-select>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import select from './components/select/index.vue'
import { IUser } from './utils/interfaces'

export default Vue.extend({
    components: {
        'v-select': select,
    },
    data() {
        return {
            user: {},
        }
    },
    methods: {
        selecting(u: IUser) {
            this.user = u
            console.log(u)
        },
    },
})
</script>

<style lang="scss">
.content {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__inner {
        width: 100%;
        max-width: 300px;
    }
}
</style>
