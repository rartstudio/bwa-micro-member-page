<template>
    <div class="flex flex-col mb-4">
        <label for="inputId" class="text-lg mb-2">
            {{ label }}
        </label>
        <input 
            :type="type" 
            :id="inputId"
            @input="updateValue"
            :value="value"
            :placeholder="placeholder"
            class="bg-white border border-gray-600 w-full px-6 py-3 focus:outline-none focus:border-teal-500"/>
    </div>
</template>

<script>
    export default {
        props: {
            inputId: {
                type: String
            },
            label: {
                type: String
            },
            placeholder : {
                type : String
            },
            type: {
                type: String
            },
            //make it reactive cause when we send data to parent
            //we want to take it back to our child
            //we want to avoid storing local state on these components,
            value: {
                type: [String,Number]
            }
        },
        methods: {
            updateValue(){
                this.$emit('input',event.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>