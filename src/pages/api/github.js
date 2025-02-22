export async function GET() {
	const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;

	const response = await fetch("https://api.github.com/repos/njralonso/trello-clone-mern/commits", {
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`,
			"X-GitHub-Api-Version": "2022-11-28",
		},
	});

	const data = await response.json();
	return new Response(JSON.stringify(data), { status: 200 });
}
