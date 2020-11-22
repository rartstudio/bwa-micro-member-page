<template>
    <div class="flex flex-col md:flex-wrap md:flex-row md:justify-start md:items-center -mx-4 mt-5 mb-4">
        <div class="mb-2 md:w-2/12 px-4">
            <img :src="transaction.metadata.course_thumbnail" alt="">
        </div>
        <div class="mb-2 md:w-3/12 px-4">
            <h6 class="text-gray-900 text-lg">
                {{ transaction.metadata.course_name }}
            </h6>
            <p class="text-gray-600">
                {{ transaction.metadata.course_level }}
            </p>
        </div>
        <div class="mb-2 md:w-2/12 px-4">
            <h6 class="text-gray-900 text-lg">
                {{ transaction.metadata.course_price | currency }}
            </h6>
        </div>
        <div class="mb-2 md:w-2/12 px-4">
            <h6 class="text-gray-900 text-lg">
                {{ formatDate(transaction.updated_at) }}
            </h6>
        </div>
        <div class="px-4 flex justify-center">
            <template v-if="transaction.status === 'pending'">
                <a :href="transaction.snap_url" class="text-center bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none text-white px-6 py-3 mt-0 whitespace-no-wrap md:ml-4 w-full" target="_blank" rel="noopener noreferrer">
                    Lunasi
                </a>
            </template>
            <template v-else>
                <nuxt-link :to="`/skill/${transaction.course_id}`" class="text-center bg-gray-250 hover:bg-gray-300 transition-all duration-200 focus:outline-none px-6 py-3 mt-0 whitespace-no-wrap md:ml-4 text-gray-600 w-full">
                    Lihat Kelas
                </nuxt-link>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            transaction : {
                type: Object
            }
        },
        methods: {
            formatDate(date){
                const d = new Date(date);
                const dtf = new Intl.DateTimeFormat("en", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                });

                const [
                    { value: Fmonth },
                    ,
                    { value: Fdate },
                    ,
                    { value: Fyear },
                ] = dtf.formatToParts(d);

                return `${Fdate} ${Fmonth}, ${Fyear}`;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>