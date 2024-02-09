import { Badge, Button, Clamp } from "@axelarjs/ui";
import tw from "@axelarjs/ui/tw";
import { cn } from "@axelarjs/ui/utils";
import { useCallback, useMemo, type ComponentProps, type FC } from "react";
import { GridLoader } from "react-spinners";
import Head from "next/head";
import { useRouter } from "next/router";

import { useAccount, useSwitchChain } from "wagmi";

import { ALL_CHAINS } from "~/config/evm-chains";
import RecentTransactions from "~/features/RecentTransactions/RecentTransactions";
import SearchInterchainToken from "~/features/SearchInterchainToken";
import { useChainFromRoute } from "~/lib/hooks";
import { useEVMChainConfigsQuery } from "~/services/axelarscan/hooks";
import EVMChainsDropdown, {
  ChainIcon,
} from "~/ui/components/EVMChainsDropdown";
import { ConditionalRenderInterchainBanner } from "../components/InterchainBanner";
import ConnectWalletButton from "../compounds/ConnectWalletButton/ConnectWalletButton";

type PageState =
  | "loading"
  | "connected"
  | "disconnected"
  | "network-mismatch"
  | "unsupported-network";

interface Props extends ComponentProps<typeof Clamp> {
  pageTitle?: string;
  pageDescription?: string;
  mustBeConnected?: boolean;
  isLoading?: boolean;
  loadingMessage?: string;
  contentClassName?: string;
  className?: string;
}

const Page: FC<Props> = ({
  pageTitle,
  pageDescription,
  mustBeConnected,
  contentClassName,
  className,
  children,
  isLoading,
  loadingMessage,
  style,
  ...props
}) => {
  const { isConnected } = useAccount();
  const { chain } = useAccount();
  const chainFromRoute = useChainFromRoute();
  const { switchChain } = useSwitchChain();
  const { data: evmChains } = useEVMChainConfigsQuery();

  const evmChain = useMemo(
    () => evmChains?.find?.((x) => x.chain_id === chain?.id),
    [chain, evmChains]
  );

  const evmChainFromRoute = useMemo(
    () => evmChains?.find?.((x) => x.chain_id === chainFromRoute?.id),
    [chainFromRoute, evmChains]
  );

  const pageState = useMemo<PageState>(() => {
    if (!mustBeConnected) {
      return "connected";
    }

    if (!isConnected) {
      return "disconnected";
    }

    if (chain && evmChains.length && !evmChain) {
      return "unsupported-network";
    }

    if (!evmChain) {
      return "loading";
    }

    if (chainFromRoute && evmChain?.chain_id !== chainFromRoute.id) {
      return "network-mismatch";
    }

    return "connected";
  }, [
    mustBeConnected,
    isConnected,
    chain,
    evmChains.length,
    evmChain,
    chainFromRoute,
  ]);

  const router = useRouter();

  const handleTokenFound = useCallback(
    async (result: {
      tokenAddress: string;
      tokenId?: string;
      chainName?: string;
    }) => {
      if (!result?.chainName) {
        return;
      }

      await router.push(
        `/${result.chainName.toLowerCase()}/${result?.tokenAddress}`
      );
    },
    [router]
  );

  const pageContent = useMemo(() => {
    switch (pageState) {
      case "loading":
        return <FullScreenLoading loadingMessage={loadingMessage} />;
      case "disconnected":
        return mustBeConnected ? (
          <div className="grid w-full flex-1 place-items-center">
            <div className="mb-20 w-full">
              <ConditionalRenderInterchainBanner />
            </div>
            <div className="grid w-full flex-1 place-items-center">
              <SearchInterchainToken onTokenFound={handleTokenFound} />
              <div className="divider w-full max-w-lg">OR</div>
              <ConnectWalletButton className="w-full max-w-md" size="md" />
            </div>
            <section className="my-10 space-y-4">
              <div className="text-center text-xl font-bold">
                RECENT INTERCHAIN TRANSACTIONS
              </div>
              <RecentTransactions maxTransactions={50} />
            </section>
          </div>
        ) : (
          children
        );
      case "unsupported-network": {
        const selectedChain = ALL_CHAINS.find((t) => t.id === chain?.id);
        return (
          <div className="grid w-full flex-1 place-items-center">
            <div className="grid w-full place-items-center gap-4">
              <div className="grid gap-1 text-center text-xl font-semibold">
                {selectedChain ? (
                  <div className="flex items-center gap-2">
                    You&apos;re connected to{" "}
                    <Badge variant="info">
                      {selectedChain?.name} ({selectedChain?.environment})
                    </Badge>
                    which is not a supported{" "}
                    <Badge variant="info">
                      {process.env.NEXT_PUBLIC_NETWORK_ENV}
                    </Badge>{" "}
                    network.
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    You are not connected to a supported
                    <Badge variant="info">
                      {process.env.NEXT_PUBLIC_NETWORK_ENV}
                    </Badge>{" "}
                    network.
                  </div>
                )}
              </div>
              <EVMChainsDropdown
                renderTrigger={() => (
                  <Button variant="primary">
                    Switch to a valid {process.env.NEXT_PUBLIC_NETWORK_ENV}{" "}
                    network
                  </Button>
                )}
                contentClassName="-translate-y-[25dvh] translate-x-[25%]"
              />
            </div>
          </div>
        );
      }
      case "network-mismatch":
        return !evmChain ? null : (
          <div className="grid w-full flex-1 place-items-center">
            <div className="grid w-full place-items-center gap-4">
              <div className="flex items-center gap-1 text-xl font-semibold">
                {`You're currently connected to ${evmChain.name} `}
                <ChainIcon
                  size="md"
                  src={String(evmChain.image)}
                  alt={evmChain.name}
                />
              </div>
              {evmChainFromRoute && (
                <Button
                  variant="primary"
                  length="block"
                  className="max-w-md"
                  onClick={() =>
                    switchChain?.({
                      chainId: evmChainFromRoute.chain_id,
                    })
                  }
                >
                  Switch to {evmChainFromRoute.name}
                </Button>
              )}
            </div>
          </div>
        );
      case "connected":
        return children;
    }
  }, [
    pageState,
    loadingMessage,
    mustBeConnected,
    handleTokenFound,
    children,
    evmChain,
    evmChainFromRoute,
    chain?.id,
    switchChain,
  ]);

  const isExceptionalState = pageState !== "connected";

  return (
    <>
      <Head>
        {pageTitle && <title>{pageTitle}</title>}
        {pageDescription && (
          <meta name="description" content={pageDescription} />
        )}
      </Head>
      <div className={className} style={style}>
        <Clamp
          $as="section"
          // id needed for the hero cta smooth scroll
          id="main-content"
          className={cn(
            "mt-20 grid min-h-[80dvh] flex-1 px-4 xl:px-2 2xl:px-0",
            {
              "place-items-center": isExceptionalState,
            },
            contentClassName
          )}
          {...props}
        >
          {pageContent}
        </Clamp>
      </div>
      {isLoading && <FullScreenLoading loadingMessage={loadingMessage} />}
    </>
  );
};

export const FullScreenLoading = ({ loadingMessage = "" }) => (
  <div className="absolute inset-0 grid place-items-center bg-black/20 backdrop-blur-sm">
    <div className="grid place-items-center gap-12 text-center">
      <GridLoader
        color="var(--primary)"
        className="animate-pulse [animation-duration:3s]"
      />
      <span>{loadingMessage || "loading page data..."}</span>
    </div>
  </div>
);

export default Object.assign(Page, {
  Title: tw.h1`text-2xl font-bold`,
  Content: tw.div`flex-1 grid`,
  FullScreenLoading,
});
