import { sluggify } from "@axelarjs/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { trpc } from "~/lib/trpc";
import { useEVMChainConfigsQuery } from "~/services/axelarscan/hooks";

const TokenDetailsRedirectPage = () => {
  const router = useRouter();
  const [message, setMessage] = useState("Loading...");

  const { computed } = useEVMChainConfigsQuery();

  const { tokenId } = router.query;

  const { data: interchainToken } =
    trpc.interchainToken.getInterchainTokenByTokenId.useQuery({
      tokenId: tokenId as string,
    });

  useEffect(() => {
    if (interchainToken) {
      const wagmiChain = computed.wagmiChains.find(
        (c) => c.axelarChainId === interchainToken.axelarChainId
      );

      setMessage("Redirecting...");

      if (!wagmiChain) {
        setMessage("Axelar chain not found");
        return;
      }

      const slug = sluggify(wagmiChain.name);

      router.push(`/${slug}/${interchainToken.tokenAddress}`).catch(() => {
        setMessage("Error redirecting to token details page");
      });
    } else {
      setMessage("Interchain token not found");
    }
  }, [computed.indexedById, computed.wagmiChains, interchainToken, router]);

  return (
    <div className="grid flex-1 place-items-center">
      <h1>{message}</h1>
    </div>
  );
};

export default TokenDetailsRedirectPage;