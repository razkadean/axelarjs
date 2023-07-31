import type { EVMChainConfig } from "@axelarjs/api";
import { Card, CopyToClipboardButton } from "@axelarjs/ui";
import { maskAddress, sluggify } from "@axelarjs/utils";
import { useMemo } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { ChainIcon } from "~/components/EVMChainsDropdown";
import { EVM_CHAIN_CONFIGS } from "~/config/wagmi";
import Page from "~/layouts/Page";
import { withRouteProtection } from "~/lib/auth";
import { trpc } from "~/lib/trpc";
import { useEVMChainConfigsQuery } from "~/services/axelarscan/hooks";
import type { IntercahinTokenDetails } from "~/services/kv";

const getChainNameSlug = (chainId: number) => {
  const chain = EVM_CHAIN_CONFIGS.find((chain) => chain.id === chainId);

  return sluggify(chain?.name ?? "");
};

export type InterchainTokensPageProps = {};

const InterchainTokensPage = () => {
  const { data: session } = useSession();

  const { data } = trpc.interchainToken.getMyInterchainTokens.useQuery(
    {
      sessionAddress: session?.address as `0x${string}`,
    },
    {
      enabled: Boolean(session?.address),
    }
  );

  const { computed } = useEVMChainConfigsQuery();

  const filteredTokens = useMemo(
    () =>
      (data ?? [])
        .map((token) => [token, computed.indexedByChainId[token.originChainId]])
        .filter(([token, chain]) => token && chain) as [
        IntercahinTokenDetails,
        EVMChainConfig
      ][],

    [computed.indexedByChainId, data]
  );

  return (
    <Page pageTitle="My Interchain Tokens">
      <div className="flex flex-col gap-4">
        <Page.Title>My Interchain Tokens ({data?.length})</Page.Title>
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredTokens.map(([token, chain]) => {
            return (
              <li
                key={`${token.tokenAddress}:${token.tokenId}`}
                className="list-item"
              >
                <Link
                  href={`/${getChainNameSlug(token.originChainId)}/${
                    token.tokenAddress
                  }`}
                >
                  <Card className="bg-base-200">
                    <Card.Body>
                      <Card.Title>
                        <ChainIcon
                          src={chain.image}
                          size="sm"
                          alt={chain.name}
                        />{" "}
                        {token.tokenName}
                      </Card.Title>

                      <CopyToClipboardButton>
                        {maskAddress(token.tokenAddress)}
                      </CopyToClipboardButton>
                    </Card.Body>
                  </Card>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Page>
  );
};

export default withRouteProtection(InterchainTokensPage);