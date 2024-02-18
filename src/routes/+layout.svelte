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

	function isCurrentRoute(href: string, path: string) {
		if (href === '/') {
			return href === path
		}
		return path.startsWith(href);
	}

</script>

<main class="max-w-screen-w max-h-screen-h">
	<AppShell>
		<svelte:fragment slot="header">
			<AppBar>
				{#each links as {href, title}}
					<a {href} class={`btn ${isCurrentRoute(href, $page.url.pathname) ? "variant-filled-primary" : ""}`}>
						{title}
					</a>
				{/each}
			</AppBar>
		</svelte:fragment>
		<div class="w-full p-2">
			<slot />
		</div>
	</AppShell>
</main>
