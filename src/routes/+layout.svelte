<script lang="ts">
	import '../app.postcss';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	const links = [
		{
			href: "/",
			title: "Home"
		},
		{
			href: "/history/",
			title: "History"
		}
	]
</script>

<main class="max-w-screen-w max-h-screen-h">
	<AppShell>
		<svelte:fragment slot="header">
			<AppBar>
				{#each links as {href, title}}
					<a {href} class={`mr-3 btn ${$page.url.pathname === href ? "variant-ghost-primary" : ""}`}>
						{title}
					</a>
				{/each}
			</AppBar>
		</svelte:fragment>
		<slot />
	</AppShell>
</main>
