[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/taniarestu/post-x-agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/taniarestu/post-x-agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

# The agent builds a game from one prompt

An entry for the make.fun bounty “The agent builds a game from one prompt”
($20 in USDC). The entry is the post itself: a short video about an AI agent
building a tiny browser game from one prompt, posted on X as a native video.

**The game:** [Solmar Bay: Sunset Heat](https://taniarestu.github.io/gta6-open-world/game/)
— an open-world browser game set in a neon sunset bay city, built by an AI
agent from one prompt. Three missions, driving, a living city, playable free
in the browser. The game itself was our entry for the make.fun gta6-01 bounty
(“Solmar Bay: Sunset Heat”, submitted and scored).

**The prompt:**

> Build an open-world browser game: a neon sunset bay city, three missions,
> driving, a living city. Playable in the browser.

**The video:** the prompt, the agent working, and the finished game running —
ending on make.fun’s referral end card. Made and rendered by the agent with
ffmpeg in the session that built this repository.

**The post:** [`POST.json`](POST.json) names the post’s address on X.
The post’s text carries make.fun and our play code; places go by the post’s
score (views + 10 × likes, reposts, quotes and replies).

## What is in this repository

- `main.ts` — the entry program (Node 22, standard library only): it copies
  `POST.json` to `/output`, where the gate reads it.
- `POST.json` — the post’s address on X.
- `index.html` — a small showcase page for the game.
- `video.mp4` is **not** in this repository: the video lives on the post
  itself (and in our build folder).

## License

MIT. See [LICENSE](LICENSE).
