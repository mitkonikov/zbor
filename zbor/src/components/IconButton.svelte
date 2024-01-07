<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<button
	type="button"
	class="btn btn-square btn-icon p-2"
	on:click={(event) => dispatch('click', event.detail)}
>
	<slot />
</button>

<style>
	.btn-icon:hover {
		background-color: inherit;
		transform: scale(1.15);
	}
</style>
