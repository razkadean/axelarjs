import type { EVMChainConfig } from "@axelarjs/api";
import {
  CopyToClipboardButton,
  ExternalLinkIcon,
  InfoIcon,
  LinkButton,
  Tooltip,
} from "@axelarjs/ui";
import { maskAddress } from "@axelarjs/utils";
import { type FC } from "react";

import { ChainIcon } from "~/ui/components/EVMChainsDropdown";

type TokenDetailsSectionProps = {
  name: string;
  symbol: string;
  tokenId?: `0x${string}`;
  chain: EVMChainConfig;
  tokenAddress: `0x${string}`;
  decimals: number;
};

const TokenDetailsSection: FC<TokenDetailsSectionProps> = (props) => {
  return (
    <section className="grid gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2 text-2xl font-bold">
          <span className="hidden sm:inline">Interchain Token </span>
          {Boolean(props.name && props.symbol) && (
            <>
              <span className="hidden sm:inline">&middot;</span>
              <span className="text-primary text-base">{props.name}</span>{" "}
              <span className="text-base opacity-50">({props.symbol})</span>
            </>
          )}
        </div>
        {props.tokenId && (
          <LinkButton
            className="flex items-center gap-2 text-base"
            href={`${props.chain.explorer.url}/token/${props.tokenAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            <ChainIcon
              src={props.chain.image}
              alt={props.chain.name}
              size="sm"
            />
            View token
            <span className="hidden sm:inline">
              on {props.chain.explorer.name}
            </span>
            <ExternalLinkIcon className="h-4 w-4 translate-x-1" />
          </LinkButton>
        )}
      </div>
      <ul className="grid gap-1.5">
        {[
          ["Name", props.name],
          ["Symbol", props.symbol],
          ["Decimals", props.decimals],
          [
            "Token Address",
            <CopyToClipboardButton
              key="token-address"
              size="xs"
              variant="ghost"
              copyText={props.tokenAddress}
            >
              {maskAddress(props.tokenAddress)}
            </CopyToClipboardButton>,
          ],
          ...(props?.tokenId
            ? [
                [
                  "Token ID",
                  <div key="token-id" className="flex items-center">
                    <CopyToClipboardButton
                      size="xs"
                      variant="ghost"
                      copyText={props.tokenId}
                    >
                      {maskAddress(props.tokenId)}
                    </CopyToClipboardButton>
                    <Tooltip
                      tip="TokeId is a common key used to identify an interchain token across all chains"
                      variant="info"
                      position="bottom"
                    >
                      <InfoIcon className="text-info h-[1em] w-[1em]" />
                    </Tooltip>
                  </div>,
                ],
              ]
            : []),
        ]
          .filter(([, value]) => Boolean(value))
          .map(([label, value]) => (
            <li key={String(label)} className="flex items-center gap-2 text-sm">
              <span className="font-semibold">{label}: </span>
              <span className="opacity-60">{value}</span>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default TokenDetailsSection;
