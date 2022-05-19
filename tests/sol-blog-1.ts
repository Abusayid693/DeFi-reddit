import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolBlog } from "../target/types/sol_blog";

const PROGRAM_ID = "HT1SvEi8Ku988kYZMe7MF85YtdmYWiZ6vS2A2ky8jDrH";
const CLUSTER_URL = "https://api.devnet.solana.com";

describe("sol-blog", () => {
  const provider = anchor.AnchorProvider.env();
  const wallet = provider.wallet as anchor.Wallet;

  anchor.setProvider(provider);

  const idl = JSON.parse(
    require("fs").readFileSync("./target/idl/sol_blog.json", "utf8")
  );
  const programId = new anchor.web3.PublicKey(PROGRAM_ID);
  const program = new Program<SolBlog>(idl, programId);

  const newAcc = anchor.web3.Keypair.generate();


  it("Is initialized!", async () => {
    const tx = await program.rpc.initialize(
      "Hello i am Rehan this is 3nd post",
      "This is title of the post",
      ["test"],
      'https://test-img.jpg',
      {
        accounts: {
          blogAccount: newAcc.publicKey,
          user: wallet.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        },
        signers: [newAcc],
      }
    );
  });
  it("It should fetch all posts!", async () => {
    const posts = await program.account.blogAccount.all();
    console.log(posts);
  });
});


