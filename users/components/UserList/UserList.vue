<template>
    <div class="p-4 border border-dashed m-2 rounded">
        <div class="flex gap-1">
            <FontAwesomeIcon
                v-for="n in 10"
                :key="n"
                class="w-5 text-red-700"
                :icon="['far', 'star-half-stroke']"
            />
        </div>

        <div class="flex flex-col gap-4 my-4 border border-gray-400 rounded-md p-4">
            <h1>My Form</h1>

            <input type="text" placeholder="Name" class="border border-gray-400 w-32 rounded-md p-2" />
            <input type="text" placeholder="Age" class="border border-gray-400 w-32 rounded-md p-2" />

            <PrimeButton label="Submit" class="w-24" />
        </div>

        <pre>
          data: {{ data }}
        </pre>
    </div>
</template>

<script lang="ts" setup>
    import { QUERY_CHARACTERS } from '@/users/api/useUsersApi'

    const data = await useUsersApi({ query: QUERY_CHARACTERS })
</script>
