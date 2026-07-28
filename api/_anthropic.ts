import Anthropic from "@anthropic-ai/sdk";

export function getAnthropicClient(): Anthropic {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY não configurada no ambiente do servidor.");
  }
  return new Anthropic();
}
