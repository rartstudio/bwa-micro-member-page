<template>
    <footer class="container mx-auto">
        <div class="flex justify-between">
            <div class="w-1/6">
                <h6 class="text-white">Company</h6>
                <ul class="mt-4">
                    <li class="mt-2">
                        <nuxt-link to="/" class="text-indigo-500 hover:text-teal-500 hover:underline">Api Developer</nuxt-link>
                    </li>
                    <li  class="mt-2">
                        <nuxt-link to="/" class="text-indigo-500 hover:text-teal-500 hover:underline">Carrer</nuxt-link>
                    </li>
                    <li  class="mt-2">
                        <nuxt-link to="/" class="text-indigo-500 hover:text-teal-500 hover:underline">Our Story</nuxt-link>
                    </li>
                    <li class="mt-2">
                        <nuxt-link to="/" class="text-indigo-500 hover:text-teal-500 hover:underline">New Soon</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="w-1/6">
                <h6 class="text-white">Student</h6>
                <ul class="mt-4">
                    <li class="mt-2">
                        <nuxt-link to="/" class="text-indigo-500 hover:text-teal-500 hover:underline">Get Scholarship</nuxt-link>
                    </li>
                    <li class="mt-2">
                        <nuxt-link to="/" class="text-indigo-500 hover:text-teal-500 hover:underline">Our Pathskills</nuxt-link>
                    </li>
                    <li class="mt-2">
                        <nuxt-link to="/" class="text-indigo-500 hover:text-teal-500 hover:underline">All Features</nuxt-link>
                    </li>
                    <li class="mt-2">
                        <nuxt-link to="/" class="text-indigo-500 hover:text-teal-500 hover:underline">Refund Policy</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="w-1/6">
                <h6 class="text-white">Touch Us</h6>
                <p class="mt-4 text-indigo-500 leading-loose">
                    Micro Centre<br/>
                    Alleysi Block X no 12<br/>
                    West Java, Indonesia<br/>
                    +21 2020 5555
                </p>
            </div>
            <div class="w-2/6">
                <h6 class="text-white">Promotions</h6>
                <p class="mt-4 text-indigo-500">
                    Submit your email for new updates
                </p>
                <form>
                    <input type="text" class="bg-white focus:outline-none border-0 px-6 py-3 mt-6" placeholder="Your Email Address"/>
                    <button class="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
                        Daftar Now
                    </button>
                </form>
            </div>
        </div>
        <div class="border-t pt-8 mt-8 border-gray-800 text-center">
            <p class="text-indigo-500">
                2020 Copyright micro by bwa. All Rights Reserved
            </p>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>