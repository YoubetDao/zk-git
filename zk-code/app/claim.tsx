"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function ClaimPage() {
  const searchParams = useSearchParams();
  const commitHash = searchParams.get("commit"); // Extract commit hash from the URL query parameter

  const [signature, setSignature] = useState("");
  const [content, setContent] = useState("");
  const [proof, setProof] = useState("");

  const generateProof = () => {
    // Mock proof generation
    setProof(
      `Proof for commit: ${commitHash}, Signature: ${signature}, Content: ${content}`
    );
  };

  const verifyProof = () => {
    alert(`Verifying proof for: ${proof}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Claim Commit: {commitHash}</h1>

      <div className="mb-4 w-full max-w-lg">
        <label className="block mb-2 text-sm font-bold">Signature</label>
        <Input
          type="text"
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
          className="w-full mb-4"
          placeholder="Enter your signature"
        />

        <label className="block mb-2 text-sm font-bold">Content</label>
        <Input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-4"
          placeholder="Enter your content"
        />

        <Button
          onClick={generateProof}
          className="w-full mb-4 bg-blue-500 hover:bg-blue-700"
        >
          Prove
        </Button>

        {proof && (
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
            <h2 className="text-xl font-bold mb-2">Generated Proof</h2>
            <p>{proof}</p>
          </div>
        )}

        <Button
          onClick={verifyProof}
          className="w-full bg-green-500 hover:bg-green-700"
        >
          Verify
        </Button>
      </div>
    </div>
  );
}
