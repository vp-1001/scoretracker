"use client";

import { useState } from "react";
import { server, contract } from "../lib/contract";

export default function ScoreTracker() {

  const [player, setPlayer] = useState("");
  const [score, setScore] = useState<number | null>(null);

  async function getScore() {
    const result = await server.simulateTransaction(
      contract.call("get_score", player)
    );

    setScore(result.result?.retval?._value);
  }

  return (
    <div className="p-6 border rounded-xl w-96">

      <h2 className="text-xl font-bold mb-4">Score Tracker</h2>

      <input
        className="border p-2 w-full"
        placeholder="Player Name"
        value={player}
        onChange={(e) => setPlayer(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white p-2 mt-3 w-full"
        onClick={getScore}
      >
        Get Score
      </button>

      {score !== null && (
        <p className="mt-3 text-lg">Score: {score}</p>
      )}
    </div>
  );
}