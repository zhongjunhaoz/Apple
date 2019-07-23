<template>
<div>
    <v-home></v-home>
</div>
</template>

<script>
import header from './header';
import home from './home';
import tail from './tail';
export default {
    components : {
        'v-header': header,
        'v-home': home,
        'v-tail': tail
    }

}
</script>

<style>

</style>
