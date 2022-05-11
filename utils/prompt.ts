const readline = require("readline");

export const holdPrompt = async (query) => {
  if (!process.env.SKIP_PROMPT) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) =>
      rl.question(query, (ans) => {
        rl.close();
        resolve(ans);
        return ans;
      })
    );
  }
};
