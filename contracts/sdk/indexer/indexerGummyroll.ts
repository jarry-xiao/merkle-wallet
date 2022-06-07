import { BN, web3 } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import React from "react";
import { hash } from "../../tests/merkle-tree";
import { PathNode, decodeMerkleRoll, OnChainMerkleRoll } from "../gummyroll";
import { NFTDatabaseConnection } from "./db";

export async function updateMerkleRollSnapshot(
  connection: web3.Connection,
  merkleRollKey: PublicKey,
  setMerkleRoll: any
) {
  const result = await connection.getAccountInfo(merkleRollKey, "confirmed");
  if (result) {
    setMerkleRoll(decodeMerkleRoll(result?.data));
  }
}

export async function updateMerkleRollLive(
  connection: web3.Connection,
  merkleRollKey: PublicKey,
  setMerkleRoll: any
) {
  let subId = connection.onAccountChange(
    merkleRollKey,
    (result) => {
      if (result) {
        try {
          setMerkleRoll(decodeMerkleRoll(result?.data));
        } catch (e) {
          console.log("Failed to deserialize account", e);
        }
      }
    },
    "confirmed"
  );
  return subId;
}

export async function getUpdatedBatch(
  merkleRoll: OnChainMerkleRoll,
  db: NFTDatabaseConnection
) {
  // If seq > max JS int it's all over :(
  const seq = merkleRoll.roll.sequenceNumber.toNumber();
  if (seq === 0) {
    return;
  }
  const pathNodes = merkleRoll.getChangeLogsWithNodeIndex();
  console.log(`Received Batch! Sequence=${seq}, entries ${pathNodes.length}`);
  let data: Array<[number, PathNode[]]> = [];
  for (const [i, path] of pathNodes.entries()) {
    if (i == seq) {
      break;
    }
    data.push([seq - i, path]);
  }

  let sequenceNumbers = await db.getSequenceNumbers();
  let rows: Array<[PathNode, number, number]> = [];
  for (const [seq, path] of data) {
    if (sequenceNumbers.has(seq)) {
      continue;
    }
    for (const [i, node] of path.entries()) {
      rows.push([node, seq, i]);
    }
  }
  db.upsert(rows);
  console.log(`Updated ${rows.length} rows`);
  await db.updateTree();
}
