import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolBlog1 } from "../target/types/sol_blog_1";

describe("sol-blog-1", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolBlog1 as Program<SolBlog1>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
