<template>
    <p>hello: {{ foo }}</p>
</template>

<script>
export default {
    name: 'EHello',

    props: {
        foo: { type: String, default: 'foo' },
    },
}
</script>
