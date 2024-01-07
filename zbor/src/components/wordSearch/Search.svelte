<script>
    import MdSearch from 'svelte-icons/md/MdSearch.svelte'

	import IconButton from '../../components/IconButton.svelte';
	import Word from '../../components/wordSearch/Word.svelte';
</script>

<div class="card bg-neutral shadow-xl">
    <div class="card-body">
        <label class="form-control w-full max-w-xs">
            <div class="flex h-10">
                <input type="text" placeholder="Збор" class="input h-10 w-full w-64 max-w-xs mr-2"/>
                <div style="transform: translate(0, -0.2em)">
                    <IconButton>
                        <MdSearch/>
                    </IconButton>
                </div>
            </div>
        </label>
    </div>
    <Word></Word>
    <Word></Word>
    <Word></Word>
</div>