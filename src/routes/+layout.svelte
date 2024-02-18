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
			href: "/history",
			title: "History"
		},
		{
			href: "/settings",
			title: "Settings"
		}
	]
</script>

<main class="max-w-screen-w max-h-screen-h">
	<AppShell>
		<svelte:fragment slot="header">
			<AppBar>
				{#each links as {href, title}}
					<a {href} class={`btn ${$page.url.pathname.endsWith(href) ? "variant-filled-primary" : ""}`}>
						{title}
					</a>
				{/each}
			</AppBar>
		</svelte:fragment>
		<slot />
	</AppShell>
</main>
