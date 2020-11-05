<template>
    <div class="flex flex-col mb-4">
        <label for="inputOccupation" class="text-lg mb-2">
            {{ label }}
        </label>
        <!-- we added v-model=``"event.category". As we learned in our previous lesson, using v-model here allows us to listen for the 'input' event that was sent up from BaseSelect’s updateValue method. And when that event happens, we’ll set our EventCreate’s event.category data equal to the value that was sent up. In this case, the value is whichever option was selected. -->
        <select
            :class="[selected ? 'border-teal-500' : 'border-gray-600',
            !empty ? '' : 'text-gray-500',
            'select-style']"
            :value="value"
            @focus="selected = true"
            @blur="selected = false"
            @change="updateValue"
            v-bind="$attrs"
            >
            <option class="text-gray-800" value="" selected disabled hidden>Select your focus</option>
            <option 
                class="text-black py-4 box-content"
                v-for="occupation in occupations"
                :selected="occupation === value"
                :value="occupation"
                :key="occupation"
                >
                {{ occupation }}
            </option>
        </select>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                selected: false
            }
        },
        props: {
            occupations : {
                type: Array,
                required: true
            },
            empty :{
                type: Boolean
            },
            value: {
                type: [String,Array]
            },
            inputOccupation: {
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
        },
        computed : {
            ...mapGetters('user',['getError'])
        }
    }
</script>

<style lang="scss" scoped>
.select-style {
    @apply px-5 py-3 transition-all duration-200 border;
}
.select-style:focus {
    @apply outline-none
}
</style>