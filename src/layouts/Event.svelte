<script>
    import { metatags } from "@roxi/routify";
    export let title,
        description,
        date,
        isPast = "";

    $: metatags.title = title + " Event";
    $: metatags.description = description;
</script>

<style>
    .dateslot {
        margin-top: 0rem;
        color: #b3b3b3;
    }
    .past-event {
        background-color: #fcd34d;
        padding: 0.3rem;
        border-radius: 0.6rem;
    }
</style>

{#if isPast === true}<span class="past-event">Past event</span>{/if}
<h1>{title}</h1>
<p class="dateslot">{date}</p>
<slot />
