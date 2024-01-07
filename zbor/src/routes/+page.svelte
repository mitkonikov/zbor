<script>
	import ContactIcons from '../components/ContactIcons.svelte';
	import Separator from '../components/Separator.svelte';
	import Logo from '../components/Logo.svelte';
	import Search from '../components/wordSearch/Search.svelte';
</script>

<svelte:head>
	<title>ЗБОР</title>
    <meta name="description" content="ЗБОР е платформа за истражување на македонскиот јазик."/>
</svelte:head>

<div class="container max-w-md h-screen flex items-center justify-center">
	<div class="">
		<Logo/>
        <Separator/>
		<!-- <Search/> -->
        <Separator/>
		<ContactIcons />
	</div>
</div>
