<script>
    import { metatags } from "@roxi/routify";
    export let title,
        description,
        date,
        isPast = "";

    let rawDate = new Date(date)
    let formattedDate = rawDate.toDateString()

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
    :global(.fullscreen-embed) {
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 25px;
        height: 0;
    }
    :global(.fullscreen-embed iframe) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

{#if isPast === true}<span class="past-event">Past event</span>{/if}
<h1>{title}</h1>
<p class="dateslot">{formattedDate}</p>
<slot />
