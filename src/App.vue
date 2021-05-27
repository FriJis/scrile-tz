<template>
    <div class="content">
        <div class="content__inner">
            <v-select></v-select>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import select from './components/select/index.vue'

@Component({
    components: {
        'v-select': select,
    },
})
export default class App extends Vue {}
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
