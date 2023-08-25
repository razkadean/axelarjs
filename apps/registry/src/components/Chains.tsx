import { Card } from "@axelarjs/ui/components/Card";
import { FC } from "react";
import Image from "next/image";

import {
  BASE_URL,
  CosmosChainConfig,
  EVMChainConfig,
  getNormalizedChainConfigs,
  NetworkKind,
} from "~/services/chain-registry";

type Props = {
  network: NetworkKind;
  search?: string;
};

const Chains: FC<Props> = async (props) => {
  const chainConfigs = await getNormalizedChainConfigs({
    network: props.network,
    search: props.search,
  });

  return (
    <ul className="grid gap-4">
      {chainConfigs.map(({ data, ...chain }) => (
        <Card key={data.key} className="bg-base-200">
          <Card.Body>
            <Card.Title $as="h1">
              <Image
                src={`${BASE_URL}/${data.iconUrl}`}
                className="mr-2 h-6 w-6"
                alt={`${data.name} icon`}
                width={24}
                height={24}
              />

              {data.name}
            </Card.Title>

            <ConfigSnippet config={chain.config} />
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
};

export default Chains;

const ConfigSnippet: FC<{
  config: EVMChainConfig | CosmosChainConfig;
}> = (props) => {
  const content = JSON.stringify(props.config, null, 2);

  return (
    <details className="collapse">
      <summary className="collapse-title">
        <span className="flex items-center gap-2">Full config</span>
      </summary>
      <div className="collapse-content">
        <div className="mockup-code">
          <pre className="max-w-xs lg:max-w-lg">{content}</pre>
        </div>
      </div>
    </details>
  );
};