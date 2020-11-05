<template>
    <div class="flex flex-col mb-4">
        <label for="inputId" :class="[error  ? 'text-red-600' : '','text-lg','mb-2'] ">
            {{ label }}
        </label>
        <input 
            :type="type" 
            :id="inputId"
            @input="updateValue"
            :value="value"
            :placeholder="placeholder"
            :class="[error ? 'input-error' : 'input-normal', 'input-style']">
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        props: {
            error : {
                type: [Boolean,Object],
                default : false
            },
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
.input-style {
    @apply bg-white border w-full px-6 py-3; 
}
.input-style:focus {
    @apply outline-none border-teal-500;
}
.input-normal {
    @apply border-gray-600;
}
.input-error {
    @apply border-red-600 text-red-600;
}
</style>