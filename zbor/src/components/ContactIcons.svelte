<script>
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
	import IconButton from './IconButton.svelte';
</script>

<div class="flex justify-center w-full">
    <IconButton on:click={() => {
        window.location.href = "https://github.com/mitkonikov/zbor";
    }}>
        <DiGithubBadge/>
    </IconButton>
</div>
