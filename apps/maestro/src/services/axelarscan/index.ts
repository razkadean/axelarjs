import { createAxelarscanClient } from "@axelarjs/axelarscan";

export default createAxelarscanClient({
  prefixUrl: String(process.env.NEXT_PUBLIC_EXPLORER_API_URL),
});
